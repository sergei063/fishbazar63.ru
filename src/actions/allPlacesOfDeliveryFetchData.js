import axios from 'axios/index';
import {setAllPlacesOfDelivery, setMinimumOrderAmount} from './index';
import config from '../config';

export const ALL_PLACES_OF_DELIVERY_URL = `${config.serverAPI}/all_places_of_delivery`;

export function allPlacesOfDeliveryFetchData() {
    return async (dispatch) => {
        try {
            const responseAllPlacesOfDelivery = await axios.get(
                ALL_PLACES_OF_DELIVERY_URL,
            );
            dispatch(
                setAllPlacesOfDelivery(
                    responseAllPlacesOfDelivery.data.AllPlacesOfDelivery,
                ),
            );
            dispatch(
                setMinimumOrderAmount(
                    responseAllPlacesOfDelivery.data.minimumOrderAmount,
                ),
            );
        } catch (e) {
            console.log(e);
        }
    };
}
