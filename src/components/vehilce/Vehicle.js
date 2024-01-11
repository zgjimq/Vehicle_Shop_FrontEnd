import React from "react";
import { useDispatch } from "react-redux";
import { sellVehicle } from "../../actions/VehicleActions";
import { Link } from "react-router-dom";
//import { getAllVehicles } from "../../actions/VehicleActions";
function Vehicle({ vehicle }) {
const dispatch=useDispatch();
//const {vehicle}=this.props;
  // Function to handle the sell button click
  const onSellClick = (id) => {
    dispatch(sellVehicle(id));
  };

 


 // const { vehicle } = this.props;

  return (
    <React.Fragment>
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-lg-9">
              {/* Display vehicle details */}
              <h5>Vehicle id: {vehicle.id}  </h5>
              <h5>Manufacturer: {vehicle.manufacturer}</h5>
              <h5>Model: {vehicle.model}</h5>
              <h5>Price: {vehicle.price}</h5>
              <h5>Horse Power: {vehicle.horsePower}</h5> 
              <h5>Color: {vehicle.color}</h5>
              <h5>Mileage: {vehicle.mileage}</h5>
              <h5>Production Year: {vehicle.productionYear}</h5>
              <h5>transmission: {vehicle.transmission}</h5>
              <h5>Fuel Type: {vehicle.fuelType}</h5>
            </div>
            <div className="col-md-3">
                <Link to="#" className="btn" onClick={() => onSellClick(vehicle.id)}>
                  
                 <p className="text-decoration-underline fw-bold fs-4">Sell Vehicle</p> 
                </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Vehicle;
