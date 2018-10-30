import {SET_MINIMUM_ORDER_AMOUNT} from '../actions';


const initialState = { minimumOrderAmount: 100 };


const ConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MINIMUM_ORDER_AMOUNT:

            return Object.assign({}, state, { minimumOrderAmount: action.minimumOrderAmount });

        default:
            return state;
    }
};
export default ConfigReducer;
