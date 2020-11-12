import MarkerIcon from '../../assets/images/marker.png';
import MarkerIconSelected from '../../assets/images/marker-selected.png';
import PetloveLogo from '../../assets/images/logo-petlove.png';

import './styles.css';

const Marker = (props) => {
  return (
    <div>
      <img src={MarkerIcon} alt="Marker PetShop"/>  
      <img src={PetloveLogo} alt="Logo PetShop" className="img-marker"/>  
    </div>
  )
}
 
export default Marker;