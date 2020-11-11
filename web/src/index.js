import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';

ReactDOM.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>,
  document.getElementById('root')
);
