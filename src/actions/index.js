export const SET_ALL_PLACES_OF_DELIVERY = 'SET_ALL_PLACES_OF_DELIVERY';
export const SET_MINIMUM_ORDER_AMOUNT = 'SET_MINIMUM_ORDER_AMOUNT';
export const SET_PLACE_OF_DELIVERY = 'SET_PLACE_OF_DELIVERY';
export const SET_ALL_FORMS_VALUE = 'SET_ALL_FORMS_VALUE';
export const SET_PRICE = 'SET_PRICE';

export const select = (item) => {
};

export const addFishToSeafoodShoppingCart = (fish, count) => ({
    type: 'ADD_SEAFOOD',
    fish,
    count,
});

export const setPlaceOfDelivery = placeOfDelivery => ({
    type: SET_PLACE_OF_DELIVERY,
    where: placeOfDelivery.where,
    price: placeOfDelivery.price,
});
export const setAllPlacesOfDelivery = allPlacesOfDelivery => ({
    type: SET_ALL_PLACES_OF_DELIVERY,
    allPlacesOfDelivery,
});

export const setMinimumOrderAmount = minimumOrderAmount => ({
    type: SET_MINIMUM_ORDER_AMOUNT,
    minimumOrderAmount,
});
export const setAllFormsValue = (id, value) => ({
    type: SET_ALL_FORMS_VALUE,
    id,
    value,
});

export const setPrice = document => ({
    type: SET_PRICE,
    document,
});
