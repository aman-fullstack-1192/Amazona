import data from "./data";
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { productListReducer } from "./reducers/productReducers";

const initialstate = {};
const reducer = combineReducers({
    productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialstate, composeEnhancer(applyMiddleware(thunk)));

export default store;