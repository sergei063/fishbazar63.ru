//ShoppingCartDialogReducer

import { SET_SHOPPING_CART_DIALOG } from '../actions'

const initialState = { shoppingCartDialogVisible: false }

const ShoppingCartDialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPPING_CART_DIALOG:
            return Object.assign({}, state, { shoppingCartDialogVisible: action.shoppingCartDialogVisible })

        default:
            return state
    }
}
export default ShoppingCartDialogReducer
