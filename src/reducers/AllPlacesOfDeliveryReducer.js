import {SET_ALL_PLACES_OF_DELIVERY} from '../actions';

const initialState = [
    { where: 'г.Новокуйбышевск', price: 70 },
    { where: 'п.Гранный', price: 70 },
    { where: 'г.Самара ', price: 150 },
    { where: 'Сухая Самарка', price: 100 },
    { where: 'Жилой район Волгарь', price: 100 },
    { where: '116км.', price: 100 },
    { where: 'Красноглинский район', price: 150 },
];

const AllPlacesOfDeliveryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PLACES_OF_DELIVERY:
            if (action.allPlacesOfDelivery) {
                return [...action.allPlacesOfDelivery];
            }
            return [...state];

            /* return Object.assign({}, state, {
                  ...action.allPlacesOfDelivery
      }); */

        default:
            return state;
    }
};
export default AllPlacesOfDeliveryReducer;
