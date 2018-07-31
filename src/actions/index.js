import PlaceOfDelivery from "../components/PlaceOfDelivery/PlaceOfDelivery";

export const  select = (item) => {

}

export const  addFishToSeafoodShoppingCart = (fish,count) => {
    return {
        type: 'ADD_SEAFOOD',
        fish:fish,
        count:count
    }
}

export const  setPlaceOfDelivery = (placeOfDelivery) => {
    return {
        type: 'SET_PLACE_OF_DELIVERY',
        where:placeOfDelivery.where,
        price:placeOfDelivery.price
    }
}

