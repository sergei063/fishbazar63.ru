import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, MetaSerifProBookFont,} from '../../css/Fonts';

const QualityAssuranceStyle = StyleSheet.create({
  cnt: {
    marginTop: '0px',
    textIndent: '0',
    backgroundColor: '#fff',
  },
  cnt_grey: {
    backgroundColor: '#f9f9f9',
  },
  quality_assurance_area: {
    height: '116px',
    '@media (max-width: 900px)': {
      height: '56px',
    },
  },
  mobileShow: {
    display: 'none',
    '@media (max-width: 730px)': {
      display: 'block',
    },
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
    '@media (max-width: 500px)': {
      fontSize: '18px',
    },
  },
  h2: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '18px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.6px',
    color: '#7794e6',
  },

  gridBaseContainer: {
    display: 'grid',
    // "height": "100%",
    gridTemplateColumns: '[a] 341px [b]1fr',
    gridTemplateRows: '',
    gap: '1px 110px',

    marginBottom: '140px',
    '@media (max-width: 1000px)': {
      gap: '1px 66px',
    },
    '@media (max-width: 730px)': {
      gridTemplateColumns: 'unset',
      gridTemplateRows: '1fr',
    },
  },
  gridContainer: {
    display: 'grid',
    // height: "100%",
    justifyContent: 'start',
    gridTemplateColumns: 'auto auto',
    // gridTemplateRows: "1fr 1fr",
    gridGap: '65px 96px',
    '@media (max-width: 1000px)': {
      gridTemplateColumns: 'unset',
      gridGap: '22px',
      gridTemplateRows: '1fr 1fr 1fr 1fr',
    },
  },
  gridCell: {
    maxWidth: '304px',
    '@media (max-width: 730px)': {
      marginLeft: '35px',
    },
  },

  seafood_layer2: {
    width: '341px',
    height: '392px',
    '@media (max-width: 730px)': {
      display: 'none',
    },
  },

  caption: {
    textAlign: 'left',
    marginBottom: '44px',
  },
  text: {
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
});
export default QualityAssuranceStyle;
