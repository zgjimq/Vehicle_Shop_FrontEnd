import axios from "axios";
import { GET_ERRORS,GET_VEHICLES,CREATE_VEHICLE,SELL_VEHICLE } from "./types";
// Create a vehicle
    // Make a POST request to create a new vehicle
    // Redirect to the home page
    // Dispatch CREATE_VEHICLE action
    // Dispatch GET_ERRORS action with error response data
export const createVehicle = (vehicle) =>async(dispatch)=>{
    try {
        const response = await axios.post("https://java-web-backed.onrender.com/api/vehicles",vehicle);
        window.location.href= "/";
        dispatch({
            type: CREATE_VEHICLE,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
       
   
}
// Get all vehicles
    // TODO: Make a GET request to fetch all vehicles
    // Dispatch GET_VEHICLES action with response data
    // Handle error
    
 export const getAllVehicles = () =>async(dispatch)=>{
    try {
        const response = await axios.get("https://java-web-backed.onrender.com/api/vehicles/all");
        dispatch({
            type: GET_VEHICLES,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data,
        });
    }
 }

// Sell a vehicle by ID
    // TODO: Make a DELETE request to sell the vehicle by ID
    // Dispatch SELL_VEHICLE action with the ID
    // Handle error

    export const sellVehicle = (vehicle_id) =>async(dispatch)=>{
        try {
            await axios.delete(`https://java-web-backed.onrender.com/api/vehicles/delete/${vehicle_id}`);
            window.location.href= "/";
            dispatch({
                type: SELL_VEHICLE,
                payload: vehicle_id,
            });
        } catch (error) {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data,
            });
        }
    }
