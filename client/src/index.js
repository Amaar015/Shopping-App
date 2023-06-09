import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'antd/dist/reset.css';
import { SearchProvider } from './Redux/search'
import { CartProvider } from './Redux/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <CartProvider>
      <SearchProvider>
        {/* <BrowserRouter> */}

        <App />
        {/* </BrowserRouter> */}
      </SearchProvider>
    </CartProvider>
  </Provider>
);


reportWebVitals();
