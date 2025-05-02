import React  from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import store from './redux/store/store.jsx'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider> 
 
)
