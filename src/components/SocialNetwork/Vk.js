import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

const VK = props => (
  <a href={'https://vk.com/id454817122'} target="_blank">
    <img
      className={css(Style.normal)}
      src={require('../../img/design/vk/vk.png')}
      srcSet={`${require('../../img/design/vk/vk2x.png')} 2x, ${require('../../img/design/vk/vk3x.png')} 3x`}
      width="60px"
      height="60px"
    />
  </a>
);

const Style = StyleSheet.create({
  normal: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    ':hover': {
      opacity: '0.8',
    },
  },
});
export default VK;
