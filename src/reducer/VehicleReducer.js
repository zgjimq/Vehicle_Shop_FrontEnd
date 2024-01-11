import { GET_VEHICLES,SELL_VEHICLE,CREATE_VEHICLE } from "../actions/types";
const initialState = {
  // initial state
  vehicles:[],
  vehicle:{},
};

export default function vehicleReducer(state = initialState, action) {
      // Update the vehicle list with the fetched vehicles
      // Remove the sold vehicle from the vehicle list
      // use filter
      switch (action.type) {
        case GET_VEHICLES:
          return {
          ...state,
            vehicles: action.payload,
          };
        case SELL_VEHICLE:
          return {
          ...state,
            vehicle: state.vehicles.filter(
              (vehicle) => vehicle.vehicle_id!== action.payload.vehicle_id
            ),
          };
        case CREATE_VEHICLE:
          
          return {
          ...state,
            vehicle: action.payload,
          };
        default:
          return state;
      }
}
