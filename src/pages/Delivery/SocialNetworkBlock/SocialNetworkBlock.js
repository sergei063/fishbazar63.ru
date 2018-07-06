
import React from 'react';

import {css} from "aphrodite/no-important";
import SocialNetworkBlockStyle from "./SocialNetworkBlockStyle";
import Instagram from "../../../components/SocialNetwork/Instagram";
import VK from "../../../components/SocialNetwork/Vk";




const SocialNetworkBlock = (props) => {
    let {items} = props;
    return (
        <div className={css(SocialNetworkBlockStyle.cnt)}>

            <div className={css(SocialNetworkBlockStyle.flexContainer)}>
                <div className={css(SocialNetworkBlockStyle.width40Percent)}><img src={require('../../../img/design/social_network/social_network.jpg')} width='100%' height='100%'></img></div>
                <div className={css(SocialNetworkBlockStyle.flexContainerInfoRow, SocialNetworkBlockStyle.width40Percent)}>
                    <div className={css(SocialNetworkBlockStyle.h1)}>Бесплатная доставка<br/>два раза в неделю</div>
                    <div className={css(SocialNetworkBlockStyle.h2)}>Узнайте ближайшие даты бесплатной доставки в соцсетях</div>
                    <div>
                        <Instagram/>
                        <span className={css(SocialNetworkBlockStyle.PL20)}>
                            <VK/>
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SocialNetworkBlock;