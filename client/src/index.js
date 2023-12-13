import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.scss';
import App from './App';

// 리덕스(세션역할) 선언
import store from "./reducer/store";
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
