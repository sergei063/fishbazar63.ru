import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, FuturaMediumFont, MetaSerifProBookFont,} from '../../css/Fonts';

const DeliveryStyle = StyleSheet.create({
  cnt: {
    marginTop: '0px',
    textIndent: '0',
    // height:'779px',
    backgroundColor: '#f9f9f9',
  },
  h1: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '42px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.19',
    letterSpacing: '1.4px',
    color: '#1e232c',
    '@media (max-width: 900px)': {
      fontSize: '32px',
    },
    '@media (max-width: 600px)': {
      fontSize: '18px',
    },
  },
  footerDiv: {
    height: '81px',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  allSeafoodArea: {
    height: '116px',
    '@media (max-width: 900px)': {
      height: '90px',
    },
  },
  deliveryArea: {
    height: '116px',
    '@media (max-width: 900px)': {
      height: '56px',
    },
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',
    '@media (max-width: 900px)': {
      flexDirection: 'column-reverse',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    '@media (max-width: 500px)': {
      alignItems: 'flex-start',
    },
  },

  flexContainerInfoRow: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: '40%',
    height: '60vh',
    '@media (max-width: 900px)': {
      width: '80%',
      height: '400px',
    },
    '@media (max-width: 500px)': {
      width: '100%',
      height: '700px',
    },
  },

  flexContainerInfoCell: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  width40Percent: {
    width: '40%',
  },
  imgDiv: {
    width: '40%',
    minWidth: '518px',

    '@media (max-width: 900px)': {
      paddingTop: '64px',
      paddingBottom: '72px',
      minWidth: 'unset',
    },
    '@media (max-width: 500px)': {
      textAlign: 'center',
      width: '100%',
      minWidth: 'unset',
    },
  },
  img: {
    width: '518px',
    height: '400px',
    '@media (max-width: 900px)': {
      width: '272px',
      height: '236px',
    },
    '@media (max-width: 500px)': {
      width: '217px',
      height: '188px',
    },
  },

  width30Percent: {
    width: '30%',
    '@media (max-width: 500px)': {
      width: '80%',
      marginBottom: '32px',
    },
  },
  width70Percent: {
    width: '70%',
    maxWidth: '303px',
    '@media (max-width: 500px)': {
      width: '80%',
    },
  },
  columnCaption: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.6px',
    textAlign: 'left',
    color: '#7794e6',
    ':nth-child(1n) > :first-child': {
      fontFamily: [FuturaMediumFont, 'sans-serif'],
      fontSize: '12px',
      marginTop: '16px',
      fontWeight: '500',
      letterSpacing: '0.4px',
    },
  },
  columnText: {
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
  redText: {
    color: '#fe545b',
  },
});
export default DeliveryStyle;
