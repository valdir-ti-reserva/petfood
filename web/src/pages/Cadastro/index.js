import Header from '../../components/Header';

import Illustration from '../../assets/images/illustration.png';

const Cadastro = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      
      <Header whiteVersion />

      <div className="row">
        
        <div className="col-6 my-auto text-right">
          <img src={Illustration} alt="Logo" className="img-fluid"/>
        </div>

        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">Falta pouco para o seu pet ser feliz. <br/><br/></h2>
            <input type="text" placeholder="Nome Completo" className="form-control form-control-lg mb-3"/>
            <input type="email" placeholder="E-mail" className="form-control form-control-lg mb-3"/>
            <input type="text" placeholder="Telefone" className="form-control form-control-lg mb-3"/>
            <input type="text" placeholder="CPF" className="form-control form-control-lg mb-3"/>
            <input type="date" placeholder="Data de nascimento" className="form-control form-control-lg mb-3"/>

            <button className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;