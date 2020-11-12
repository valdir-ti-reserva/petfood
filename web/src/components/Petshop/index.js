import PetloveLogo from '../../assets/images/logo-petlove.png';
import './styles.css';

const Petshop = () => {
  return (
    <li className="petshop d-inline-block">
      <div className="d-inline-block">
        <img src={PetloveLogo} alt="Logo Empresa" className="img-fluid"/>
      </div>
      
      <div className="d-inline-block pl-3 align-bottom">

        <b>Petlove</b>
        
        <div className="petshop-info">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span class="mdi mdi-cash-usd-outline"></span>
          <text>$$$</text>
          <span class="mdi mdi-crosshairs-gps"></span>
          <text>12km</text>
        </div>
        
        <label className="badge badge-primary">Frete Grátis</label>
      
      </div>

    </li>
  )
}

export default Petshop;