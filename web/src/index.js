import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Petshop from './pages/Petshop';

ReactDOM.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);
