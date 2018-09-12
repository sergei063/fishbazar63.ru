//AllFormsReducer

import Katalog from "../Katalog";
const getInitialState = ()=> {

    let initialState = JSON.parse(localStorage.getItem('AllForms'));
    if (!initialState) {
        initialState = []
    }
    return initialState
};


const saveToLocalStorage = (state) => {
    localStorage.setItem('AllForms', JSON.stringify(state))
};

const AllFormsReducer = function (state = getInitialState(), action) {


    switch (action.type) {
        case 'SET_ALL_FORMS_VALUE':
            state[action.id] = action.value;
            saveToLocalStorage(Object.assign({}, state))
            return Object.assign({}, state);

        default:
            return state
    }

};

export default AllFormsReducer;