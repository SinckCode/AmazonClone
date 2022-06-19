import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const signIn = e => {
     e.preventDefault();

     auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Se creo exitosamente un nuevo ususario con email y contrasena
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to ='/'>
      <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Contraseña</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login__signInButton'>Sing In</button>
        </form>
        <p>Al identificarte aceptas las Condiciones del Amazon FAKE Clone de uso y venta. Consulta nuestro Aviso de privacidad y nuestras Aviso de Cookies y Aviso sobre publicidad basada en los intereses del usuario.</p>
      <button onClick={register}  className='login__registerButton'>Crea tu Cuenta de Amazon</button>
      </div>
    </div>
  )
}

export default Login
