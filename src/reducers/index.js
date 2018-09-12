import {combineReducers} from 'redux'
import ShoppingCartReducer from "./ShoppingCartReducer";
import {routerReducer} from "react-router-redux";
import SeafoodShoppingCartReducer from "./SeafoodShoppingCartReducer";
import PlaceOfDeliveryReducer from "./PlaceOfDeliveryReducer";
import AllFormsReducer from "./AllFormsReducer";

const allReducers = combineReducers({
    routing:routerReducer,
    shoppingCart:ShoppingCartReducer,
    placeOfDelivery:PlaceOfDeliveryReducer,
    seafoodShoppingCart:SeafoodShoppingCartReducer,
    allForms:AllFormsReducer
});

export default allReducers