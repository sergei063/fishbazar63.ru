import React from 'react';
import Delivery from "./Delivery";
import SocialNetworkBlock from "./SocialNetworkBlock/SocialNetworkBlock";



const DeliveryPage = (props) => {
    let {items} = props;
    return (
        <div>
            <Delivery/>
            <SocialNetworkBlock/>
        </div>
    );
}

export default DeliveryPage;