import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ShoppingCartReducer from './ShoppingCartReducer';
import SeafoodShoppingCartReducer from './SeafoodShoppingCartReducer';
import PlaceOfDeliveryReducer from './PlaceOfDeliveryReducer';
import AllFormsReducer from './AllFormsReducer';
import PriceReducer from './PriceReducer';
import AllPlacesOfDeliveryReducer from "./AllPlacesOfDeliveryReducer";

const allReducers = combineReducers({
  routing: routerReducer,
  shoppingCart: ShoppingCartReducer,
  placeOfDelivery: PlaceOfDeliveryReducer,
  allPlacesOfDelivery: AllPlacesOfDeliveryReducer,
  seafoodShoppingCart: SeafoodShoppingCartReducer,
  allForms: AllFormsReducer,
  price: PriceReducer,
});

export default allReducers;
