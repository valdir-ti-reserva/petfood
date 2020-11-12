import Logo from '../../assets/images/logo-white.png';
import LogoGreen from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import './styles.css'

const Header = ({whiteVersion, hideCart}) => {

  const openDock = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event)
  }

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <Link to="/">
          <img src={whiteVersion?Logo:LogoGreen} alt="Logo"/>
        </Link>
      </header>
      {!hideCart && (
        <button className="btn btn-secondary card-button" onClick={() => openDock()}>
          <span className="mdi mdi-cart"></span>
          &nbsp;2 Itens
        </button>
      )}
    </div>
  )
}

export default Header;
