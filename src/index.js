import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store'
import axios from 'axios'

 /* axios.defaults.baseURL = 'http://localhost:3001'   */ //para local
   axios.defaults.baseURL = 'https://countries-server-x977.onrender.com'  

 //Otros deploy del back por si no funciona la primera opción
 /* 'https://countries-back-gilt.vercel.app' */
 /* 'https://countriesback-production-960b.up.railway.app/' */  //cuando quiera actualizar, pushear debo usar esta

ReactDOM.render(
<Provider store = { store }>
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
