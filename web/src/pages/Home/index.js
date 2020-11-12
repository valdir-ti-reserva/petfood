import Header from '../../components/Header';
import Petshop from '../../components/Petshop';
import Map from '../../components/Map';
import './styles.css';

const Home = () => {
  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
          <ul className="col-12 petshop-list">
            {[1,2,3,4,5,6,7,8,9].map(p =><Petshop />)}
          </ul>
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Home;