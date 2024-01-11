
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Layout/Header';
//import Vehicle from './components/vehilce/Vehicle';
//import Veh from './components/veh';//
import AddVehicle from './components/vehilce/AddVehicle';
import VehicleShop from './components/VehicleShop';
 //axios
 //react router dom
 //redux-thunk
function App() {
    return (
      <Provider store={store}>
        
        <Router>
          <div>
            <Header/>
            <Routes>
                <Route exact path="/addVehicleForm" element={<AddVehicle/>}
                ></Route>

               <Route exact path="/" element={<VehicleShop/>}>
                </Route> 
                

                

            </Routes>
          </div>
        </Router>
      </Provider>
    );
}

export default App;
