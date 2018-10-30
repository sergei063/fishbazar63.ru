export const select = (item) => {};

export const addFishToSeafoodShoppingCart = (fish, count) => {
  return {
    type: 'ADD_SEAFOOD',
    fish: fish,
    count: count,
  };
};

export const setPlaceOfDelivery = (placeOfDelivery) => {
  return {
    type: 'SET_PLACE_OF_DELIVERY',
    where: placeOfDelivery.where,
    price: placeOfDelivery.price,
  };
};
export const setAllPlacesOfDelivery = (allPlacesOfDelivery) => {
  return {
    type: 'SET_ALL_PLACES_OF_DELIVERY',
    allPlacesOfDelivery: allPlacesOfDelivery,
  };
};
export const setAllFormsValue = (id, value) => {
  return {
    type: 'SET_ALL_FORMS_VALUE',
    id: id,
    value: value,
  };
};

export const setPrice = (document) => {
  return {
    type: 'SET_PRICE',
    document: document,
  };
};
