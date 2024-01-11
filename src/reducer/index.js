import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
//import vehicleReducer from "./vehicleReducer";
import vehicleReducer from "./VehicleReducer";
//import the reducers that we have created
export default combineReducers({
  // combine multiple reducers into a single root reducer
  errorReducerContent:ErrorReducer,
  vehicleReducerContent: vehicleReducer,
});
