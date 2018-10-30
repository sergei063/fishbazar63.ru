import Katalog from '../Katalog';

const initialState = {
  allItems: Katalog.getShoppingCart(),
  totalSum: 1,
};

const ShoppingCartReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE':
      return Object.assign({}, state, {
        totalSum: action.totalSum,
      });

    default:
      return state;
  }
};

export default ShoppingCartReducer;
