import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Store/Store'
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
    <ToastContainer/>
  </>
);