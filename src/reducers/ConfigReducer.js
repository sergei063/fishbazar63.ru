import { SET_IS_HIDDEN_DELIVERY_PRICE, SET_MINIMUM_ORDER_AMOUNT } from '../actions'

const initialState = { minimumOrderAmount: 100, isHiddenDeliveryPrice: false }

const ConfigReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MINIMUM_ORDER_AMOUNT:
            return Object.assign({}, state, { minimumOrderAmount: action.minimumOrderAmount })
        case SET_IS_HIDDEN_DELIVERY_PRICE:
            return Object.assign({}, state, { isHiddenDeliveryPrice: action.isHiddenDeliveryPrice })

        default:
            return state
    }
}
export default ConfigReducer
