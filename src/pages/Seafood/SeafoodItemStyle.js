import {StyleSheet} from 'aphrodite/no-important';
import {
    FuturaBoldFont,
    FuturaFont,
    FuturaMediumFont,
    MetaSerifProBookFont,
    MetaSerifProFont,
    MetaSerifProLightFont,
} from '../../css/Fonts';

const SeafoodItemStyle = StyleSheet.create({
  cnt: {
    marginTop: '0px',

    textIndent: '0',
    backgroundColor: '#f9f9f9',
  },
  img: {
    width: '304px',
    height: '172px',
    '@media (max-width: 650px)': {
      width: '224px',
      height: '132px',
    },
  },
  h1: {
    fontFamily: [FuturaFont, 'sans-serif'],
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.39',
    letterSpacing: '0.6px',
    textAlign: 'left',
    color: '#ffffff',
  },
  h2: {
    fontFamily: [MetaSerifProFont, 'sans-serif'],
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.39',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#ffffff',
  },
  h124: {
    height: '124px',
    '@media (max-width: 650px)': {
      height: '63px',
    },
  },
  flexContainer: {
    display: 'flex',
    height: '500px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'strech',
    alignContent: 'flex-start',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 'inherit',
    },
  },
  fishContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    fontFamily: [MetaSerifProLightFont, 'sans-serif'],
    fontSize: '14px',
  },
  infoContainer: {
    display: 'flex',
    height: '500px',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: ' space-between',
    alignItems: 'stretch',
    alignContent: 'center',
    '@media (max-width: 650px)': {
      marginLeft: '35px',
      height: '350px',
    },
  },
  fishContainerFirst: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    marginLeft: 'unset',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.71',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#1e232c',
    width: '100%',
    '@media (max-width: 1050px)': {
      // marginLeft:'73px',
    },
    '@media (max-width: 720px)': {
      marginLeft: '35px',
    },
  },
  width40P: {
    width: '40%',
  },
  width50P: {
    width: '50%',
    '@media (max-width: 650px)': {
      width: 'inherit',
    },
  },
  width30P: {
    width: '30%',
    '@media (max-width: 650px)': {
      width: 'inherit',
    },
  },

  link: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2',
    cursor: 'pointer',
    color: '#1e232c',
    fontSize: '12px',
    ':hover': {
      color: '#fe545b',
    },
  },

  price: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',

    color: '#7794e6',
    fontSize: '14px',
  },
  name: {
    fontFamily: [FuturaMediumFont, 'sans-serif'],
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.78',
    letterSpacing: '0.6px',
    textAlign: 'left',
    color: '#000000',
  },
  aboutDelivery: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.71',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#1e232c',

    width: '303px',
    '@media (max-width: 650px)': {
      width: '100%',
    },
  },
  nameDiv: {
    fontFamily: [MetaSerifProLightFont, 'sans-serif'],
    fontSize: '14px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.71',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#1e232c',
  },
  aboutFish: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    textAlign: 'left',
    color: '#1e232c',
  },
  hidden_text: {
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    textAlign: 'left',
    color: 'rgba(31, 35, 44, 0.4)',
  },
  withBuy: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.6px',
    textAlign: 'center',
    color: '#7794e6',
  },
  mobileHidden: {
    display: 'block',
    '@media (max-width: 730px)': {
      display: 'none',
    },
  },

  mobileHidden650: {
    display: 'block',
    '@media (max-width: 650px)': {
      display: 'none',
    },
  },
  mobileShow650: {
    display: 'none',
    '@media (max-width: 650px)': {
      display: 'block',
    },
  },

  withBuyDiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-start',

    '@media (max-width: 1050px)': {
      width: '100%',
    },
  },

  deliveryMore: {
    display: 'grid',
    gridTemplateColumns: '30px 1fr',
  },
});
export default SeafoodItemStyle;
