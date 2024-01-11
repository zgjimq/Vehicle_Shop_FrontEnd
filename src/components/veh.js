import React, { useEffect } from "react";
import Vehicle from "./vehilce/Vehicle";
import { useDispatch,useSelector } from "react-redux";
import { getAllVehicles } from "../actions/VehicleActions";
import ButtonAddVehicle from "./vehilce/buttonAddVehicle";
function Vehicles(){
    const dispatch = useDispatch();
    const vehicleList=useSelector((state) => state.vehicleReducerContent.vehicles);
    useEffect(() => {
        dispatch(getAllVehicles());
    }, [dispatch]);
// a me hek?
//po 
    return (
        <div className="container">
            <ButtonAddVehicle/>
            <br></br>
            {
            vehicleList.map((vehicle) => (
                <Vehicle key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
    );

}
export default Vehicles;