import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router-dom';
import { db } from './firebase';

function Payment() {
    
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() =>{

        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{
            //paymentIntent = payment confirmation


            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }
    
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
  return (
    <div className='payment'>
      <div className='payment__container'>

          <h1>
              Checkout (<Link to = "/checkout">{basket?.length} items</Link>)
          </h1>
         {/* Payment section - delivery addres */}
          <div className='payment__section'>
              <div className='payment__title'>
                  <h3>Direccion de Entrega</h3>
              </div>
              <div className='payment__address'>
                  <p>{user?.email}</p>
                  <p>123 React lane</p>
                  <p>Los Angeles, CA</p>
              </div>
          </div>
         {/* Payment section - Review Items */}
          <div className='payment__section'>
              <div className='payment__title'>
              <h3>Revisa los Productos y el Envio</h3>
              </div>
              <div className='payment__items'>
                  {basket.map(item => (
                      <CheckoutProduct 
                      id = {item.id}
                      title = {item.title}
                      image = {item.image}
                      price = {item.price}
                      rating = {item.rating}
                      
                      />
                  ))}
              </div>
          </div>
         {/* Payment section - Payment method */}
          <div className='payment__section'>
              <div className='payment__title'>
              <h3>Método de Pago</h3>
              </div>
              <div className='payment__details'>
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className='payment__priceContainer'>
       <CurrencyFormat
        renderText={(value) => (
          <h3>Total de Ordenes: {value}</h3>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          />

          <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>En Proceso</p> : "Compra Ahora"}</span>
          </button>
                </div>
                {error && <div>{error}</div>}
            </form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Payment

