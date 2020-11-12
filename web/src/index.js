import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Petshop from './pages/Petshop';
import Sidebar from './components/Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <Petshop />
  </React.StrictMode>,
  document.getElementById('root')
);
