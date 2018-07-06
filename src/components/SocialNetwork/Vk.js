import React from 'react';
import {StyleSheet, css} from "aphrodite/no-important";
import SocialNetworkBlockStyle from "../../pages/Delivery/SocialNetworkBlock/SocialNetworkBlockStyle";

const VK = (props) => {
    return (
        <a href={`https://vk.com/id454817122`} target='_blank'>
            <img className={css(Style.normal)}
                 src={require('../../img/design/vk/vk.png')}
                 srcSet={`${require('../../img/design/vk/vk2x.png')} 2x, ${require('../../img/design/vk/vk3x.png')} 3x`}
                 width='60px' height='60px'>
            </img>
        </a>
    );
}


const Style = StyleSheet.create({

    normal: {
        width: '60px',
        height: '60px',
        objectFit: 'contain',
        ':hover': {
            opacity: '0.8',
        }
    }


});
export default VK;