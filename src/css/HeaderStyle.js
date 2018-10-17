import {minify, StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, FuturaMediumFont,} from './Fonts';

minify(false);
const HeaderStyle = StyleSheet.create({
  siteTitle: {
    fontFamily: 'Merriweather, serif',
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '2em',
    color: 'white',
  },
  div: {
    height: '44px',
    width: '44px',
  },
  headBarUl: {
    listStyle: 'none',
    padding: '0px 19px 0 0',
  },
  headBarLI: {
    padding: '0 0 20px 12px',
    position: 'relative',
    float: 'left',
  },

  pouchInstagram: {
    background: `#424242 url(${require('../img/bg_pouch_inst.png')}) no-repeat 50% 13px`,
    height: '44px',
    width: '44px',
    borderRadius: '44px',
    float: 'left',
    position: 'relative',
    ':hover': {
      backgroundColor: '#697a7c',
    },
  },
  pouchVk: {
    background: `#424242 url(${require('../img/bg_pouch_vk.png')}) no-repeat 50% 13px`,
    height: '44px',
    width: '44px',
    borderRadius: '44px',
    float: 'left',
    position: 'relative',
    ':hover': {
      backgroundColor: '#697a7c',
    },
  },

  floatMenuBlock: {
    '@media (max-width:1150px)': {},
    '@media (max-width: 900px)': {
      position: 'absolute',
      boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)',
      backgroundColor: 'white',
      textAlign: 'left',
      // float: 'left',
      padding: '23px 0px 0px 0px',
    },
    '@media (max-width: 500px)': {
      top: '-5px',
    },
  },
  floatMenuBlockWidth: {
    width: '80%',
    '@media (max-width:1300px)': {
      width: '99%',
    },
    '@media (max-width: 900px)': {
      width: '0px',
      boxShadow: 'none',
    },
  },
  floatMenuBlockWidthMobile: {
    '@media (max-width:1150px)': {},
    '@media (max-width: 900px)': {
      width: '100%',
    },
    '@media (max-width: 500px)': {
      width: '100%',
      height: '386px',
    },
  },

  floatMenuBlockTablet: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'block',
      position: 'relative',
      backgroundColor: 'white',
      textAlign: 'left',
      width: '100%',
      height: '100%',

      // float: 'left',
      padding: '0',
    },
  },
  nav_urls: {
    textAlign: 'justify',
    /* maxWidth:'1104px', */
    margin: '0 auto',
    // minWidth:'712px',
  },
  phoneNumberMenuBlock: {
    float: 'left',
    padding: '14px 0px 0px 5px',
    fontFamily: 'Vollkorn SC, sans-serif',
    fontSize: '2.5em',
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
  menuInlineUl: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    // alignItems:'baseline',
    alignItems: 'center',
    '@media (max-width: 1030px)': {
      padding: '0px',
    },
    '@media (max-width: 900px)': {
      marginLeft: '-35px',
      display: 'none',
    },
  },
  menuLogoFull: {
    display: 'inline',
    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  menuLogoShort: {
    display: 'none',
    '@media (max-width: 500px)': {
      display: 'inline',
    },
  },

  logo: {
    textAlign: 'center',
    flexGrow: '1',
    marginLeft: '20%',

    '@media (max-width: 500px)': {
      marginLeft: '0px',
    },
  },
  menuInlineUlBlock: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'baseline',

    '@media (max-width: 900px)': {
      marginLeft: '-35px',
      display: 'block',
    },
  },
  menuInlineUlTablet: {
    display: 'none',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',

    alignContent: 'center',
    '@media (max-width: 900px)': {
      display: 'flex',
      margin: '0',
      height: '100%',
      alignItems: 'flex-end',
      // paddingTop:'14px'
    },
  },
  mobileMenuBtn: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'block',
      position: 'relative',
    },
  },
  mobileMenuMarginLeft60: {
    '@media (max-width: 900px)': {
      marginLeft: '60px',
    },
    '@media (max-width: 500px)': {
      marginLeft: '19px',
    },
  },
  mobileMenuBtnHidden: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },

  /**
     * <img src={require('../img/design/deliveryman/deliveryman.png')}
     srcSet={`${require('../img/design/deliveryman/deliveryman2x.png')} 2x, ${require('../img/design/deliveryman/deliveryman3x.png')} 3x`}
     width='264px' height='205px'></img>

     image-set(
     url(examples/images/image-384.jpg) 1x,
     url(examples/images/image-768.jpg) 2x,
     )

     */
  pouchMobileMenu: {
    background: `#fff  image-set(url(${require('../img/design/icon_menu/menu.png')}) 1x, url(${require('../img/design/icon_menu/menu2x.png')}) 2x, url(${require('../img/design/icon_menu/menu3x.png')}) 3x     ) no-repeat 50% 0px`,
    height: '44px',
    width: '44px',
    float: 'left',
    position: 'relative',
    ':hover': {},
  },
  pouchMobileMenuClose: {
    background: `#fff  image-set(url(${require('../img/design/menu_close/menu-close.png')}) 1x, url(${require('../img/design/menu_close/menu-close2x.png')}) 2x, url(${require('../img/design/menu_close/menu-close3x.png')}) 3x     ) no-repeat 50% 0px`,
    height: '44px',
    width: '44px',
    float: 'left',
    position: 'relative',
    ':hover': {},
  },
  pouchPhoneMenu: {
    background: `#424242 url(${require('../img/phone_pounch.png')}) no-repeat 50% 13px`,
    height: '44px',
    width: '44px',
    borderRadius: '44px',
    float: 'left',
    position: 'relative',
    ':hover': {
      backgroundColor: '#697a7c',
    },
  },

  sales: {
    backgroundColor: '#3454b0',
    height: '50px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 10px 28px, rgba(0, 0, 0, 0.12) 0px 10px 20px',
    //transform: 'rotate(-1deg)',
  },

  salesFirstChild: {
    textAlign: 'center',
    width: '100%',
  },
  salesChild: {
    fontFamily: [FuturaMediumFont, 'sans-serif'],
    fontSize: '16',
    textAlign: 'left',
    display: 'none',
    width: '40%',
    '@media (max-width: 900px)': {
      width: '60%',
      fontSize: '14px',
    },
    '@media (max-width: 600px)': {
      width: '95%',
      fontSize: '14px',
    },
  },

  salesH1: {
    fontFamily: [FuturaBoldFont, 'sans-serif'],
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.19',

    letterSpacing: '1.4px',
    color: '#ffffff',

    ':hover > :nth-child(1)': {
      color: '#fe545b',
    },
    '@media (max-width: 900px)': {
      ':nth-child(1n) > :first-child': {
        fontSize: '24px',
      },
    },
    '@media (max-width: 600px)': {
      ':nth-child(1n) > :first-child': {
        fontSize: '20px',
      },
    },
  },
});
export default HeaderStyle;
