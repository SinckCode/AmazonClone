import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


const promise = loadStripe("pk_test_51KMit1Khga5mamKzSTixJo7QbbnPAoruyiQvmnlZOrnfs4bXQcVlLDLIMk7Az6xPpQyWZt2L8MEPQFCr2jD2D19p00WH6KJKn6");

function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() =>{

    auth.onAuthStateChanged(authUser => {
      console.log('THEW USER IS >>> ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
       dispatch({
         type: 'SET_USER',
         user: null
       })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
        <div className="app">
         <Switch>

         <Route path="/login">
         <Login />
         </Route>

         <Route path="/checkout">
         <Header />
         <Checkout />
         </Route>

         <Route path="/payment">
         <Header />
         <Elements stripe={promise}>
         <Payment />
         </Elements>
         </Route>

         <Route path="/orders">
         <Header />
         <Orders />
         </Route>

         <Route path="/">
         <Header />
         <Home />
         </Route>
         </Switch>
        </div>
    </Router>
  );
}

export default App;
