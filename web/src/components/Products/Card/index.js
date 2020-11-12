import Racao2 from '../../../assets/images/racao-2.png';

import './styles.css';

const ProductCard = () => {
  return (
    <div className="product col-3">
      <img src={Racao2} alt="Ração 2" className="img-fluid product-image align-center"/>
      <button className="btn btn-primary rounded-circle">+</button>
        <label className="badge badge-primary">R$ 90,00</label>
        <small>
          <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
        </small>
    </div>
  )
}

export default ProductCard;
