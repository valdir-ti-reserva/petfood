import './styles.css';

import Racao1 from '../../../assets/images/racao-1.png';

const ProductList = () => {
  return (
    <div className="col-12 product-list">
      <div className="row">
        <div className="col-3">
          <img src={Racao1} alt="" className="img-fluid"/>
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Ração Pedigree Vital Pro para Cães Adultos a Partir de 12 Meses de Idade Sabor Carne, Frango e Cereais</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>

      </div>
    </div>
  )
}

export default ProductList;
