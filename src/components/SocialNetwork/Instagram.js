import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

const Instagram = props => (
  <a href={'https://www.instagram.com/fishbazar63/'} target="_blank">
    <img
      className={css(Style.inst_normal)}
      src={require('../../img/design/instagram/inst-normal.png')}
      srcSet={`${require('../../img/design/instagram/inst-normal2x.png')} 2x, ${require('../../img/design/instagram/inst-normal3x.png')} 3x`}
      width="60px"
      height="60px"
    />
  </a>
);

const Style = StyleSheet.create({
  inst_normal: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
    ':hover': {
      opacity: '0.8',
    },
  },
});
export default Instagram;
