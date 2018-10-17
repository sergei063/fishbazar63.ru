import {StyleSheet} from 'aphrodite/no-important';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) => (baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null),
};

const extended = StyleSheet.extend([globalExtension]);

const styles = StyleSheet.create({
  [GLOBALS]: {
    html: {
      height: '100%',
      width: '100%',
      margin: '0px',
      padding: '0px',
      fontSize: '14px',
      backgroundColor: 'white',
      '@media (max-width: 600px)': {
        fontSize: '10',
      },
    },
    a: {
      textDecoration: 'none',
      color: 'inherit',
      cursor: 'pointer',
    },
    '*': {
      outline: 'unset !important',
    },
    '#root': {
      height: '100%',
    },

    body: {
      height: '100%',
      /* backgroundImage: "url(" + require('../img/fon.jpg') + ")",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'right top',
            backgroundPositionX: '0px',
            backgroundPositionY: '0px', */
      margin: '0px',
      padding: '0px',
      backgroundRepeat: 'no-repeat',
    },
    main: {
      // left: '10%',
      backgroundColor: '#fff',
      textIndent: '0em',
      padding: '0px',
      '@media (max-width: 750px)': {
        /* top: '25%',
                width:'100%',
                height:'60%' */
      },
    },
    nav: {
      backgroundColor: 'white',
      height: '180px',
      boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)',
      '@media (max-width: 900px)': {
        height: '110px',
      },
      '@media (max-width: 500px)': {
        height: '64px',
      },
    },
    header: {
      height: '225px',
      zIndex: '10000',
      backgroundColor: 'white',
      '@media (max-width: 900px)': {
        height: '110px',
      },
      '@media (max-width: 500px)': {
        height: '114px',
      },
    },
    ul: {
      listStyle: 'none',
    },
  },
});
export default extended.css(styles[GLOBALS]);
