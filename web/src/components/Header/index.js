import './styles.css'
import Logo from '../../assets/images/logo-white.png';
import LogoGreen from '../../assets/images/logo.png';

const Header = ({whiteVersion}) => {
  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion?Logo:LogoGreen} alt="Logo"/>
      </header>
    </div>
  )
}

export default Header;