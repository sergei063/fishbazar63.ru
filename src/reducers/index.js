import {combineReducers} from 'redux'
import ShoppingCartReducer from "./ShoppingCartReducer";
import {routerReducer} from "react-router-redux";
import SeafoodShoppingCartReducer from "./SeafoodShoppingCartReducer";
import PlaceOfDeliveryReducer from "./PlaceOfDeliveryReducer";
import AllFormsReducer from "./AllFormsReducer";
import PriceReducer from "./PriceReducer";

const allReducers = combineReducers({
    routing:routerReducer,
    shoppingCart:ShoppingCartReducer,
    placeOfDelivery:PlaceOfDeliveryReducer,
    seafoodShoppingCart:SeafoodShoppingCartReducer,
    allForms:AllFormsReducer,
    price:PriceReducer
});

export default allReducers