import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import { Formulario } from './Formulario.jsx'
import { Correo } from './Correo.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Formulario></Formulario>
  //<Correo></Correo>
)


/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

//<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"> -> html