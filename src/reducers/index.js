import {combineReducers} from 'redux'
import ShoppingCartReducer from "./ShoppingCartReducer";
import {routerReducer} from "react-router-redux";
import SeafoodShoppingCartReducer from "./SeafoodShoppingCartReducer";
import PlaceOfDeliveryReducer from "./PlaceOfDeliveryReducer";

const allReducers = combineReducers({
    routing:routerReducer,
    shoppingCart:ShoppingCartReducer,
    placeOfDelivery:PlaceOfDeliveryReducer,
    seafoodShoppingCart:SeafoodShoppingCartReducer
})

export default allReducers