import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
import combineReducers from "./reducer"

const intialState = {};
const middleWare = thunk;

let store;  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

store = createStore(
    combineReducers,
     intialState,
     composeEnhancer(applyMiddleware(middleWare)
     ));

export default store;