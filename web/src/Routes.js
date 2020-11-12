import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/global.css';

import Cadastro from './pages/Cadastro';
import Checkout from './pages/Checkout';
import Petshop from './pages/Petshop';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/petshop/:id" exact component={Petshop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/cadastro" component={Cadastro} />
      </Router>
      <Sidebar />
    </>
  )
}

export default Routes;