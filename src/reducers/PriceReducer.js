const initialState = {
  document: {},
};

const PriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRICE':
      return Object.assign({}, state, {
        document: action.document,
      });

    default:
      return state;
  }
};
export default PriceReducer;
