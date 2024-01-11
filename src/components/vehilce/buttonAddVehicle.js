import React from "react";

import { Link } from "react-router-dom";

function ButtonAddVehicle(){
    return(
<>
        <div className="container">
            <Link to="/addVehicleForm" className="btn btn-outline-primary">
                Add an Vehicle
            </Link>
            <br></br>
        </div>
</>
    );
}
export default ButtonAddVehicle;