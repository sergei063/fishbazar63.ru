import React from 'react';

import {css} from "aphrodite/no-important";
import SocialNetworkBlockStyle from "./SocialNetworkBlockStyle";
import Instagram from "../../../components/SocialNetwork/Instagram";
import VK from "../../../components/SocialNetwork/Vk";
import AppStyle from "../../../css/AppStyle";


const SocialNetworkBlock = (props) => {

    return (
        <div className={css(SocialNetworkBlockStyle.cnt)}>

            <div className={css(SocialNetworkBlockStyle.flexContainer)}>
                <div className={css(SocialNetworkBlockStyle.width40Percent)}><img src={require('../../../img/design/social_network/social_network.jpg')} width='100%' height='100%'></img></div>
                <div className={css(SocialNetworkBlockStyle.flexContainerInfoRow)}>
                    <div className={css(SocialNetworkBlockStyle.h1,AppStyle.zI3)}>Бесплатная доставка<br/>два раза в неделю</div>
                    <div className={css(SocialNetworkBlockStyle.h2,AppStyle.zI3)}>Узнайте ближайшие даты бесплатной доставки в соцсетях</div>
                    <div className={css(AppStyle.zI3)}>
                        <Instagram/>
                        <span className={css(SocialNetworkBlockStyle.PL20)}>
                            <VK/>
                        </span>
                    </div>

                </div>

            </div>
            <div className={css(SocialNetworkBlockStyle.delivery_small)}>{/*<img src={require('../../../img/design/delivery_small/delivery.png')} width='100%' height='100%'></img>*/}</div>

        </div>
    );
};

export default SocialNetworkBlock;