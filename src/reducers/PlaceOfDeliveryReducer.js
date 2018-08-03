

const initialState = {
    where: null,
    price:0
};

const PlaceOfDeliveryReducer = function (state = initialState, action) {

    switch (action.type) {
        case 'SET_PLACE_OF_DELIVERY':
            return Object.assign({}, state, {
                where: action.where,
                price:action.price
            });

        default:
            return state
    }

};
export default PlaceOfDeliveryReducer;