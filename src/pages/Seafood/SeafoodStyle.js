import {StyleSheet} from 'aphrodite/no-important';

const SeafoodStyle = StyleSheet.create({
  cnt: {
    overflow: 'unset',

    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'stretch',

    width: '100%',
    marginTop: '118px',
    position: 'relative',
    // overflow: "hidden",
    '@media (max-width: 900px)': {
      flexDirection: 'column-reverse',
      marginTop: '48px',
    },
  },
  textAlignCenter: { textAlign: 'center' },
  catalogGroupsDiv: {
    textAlign: 'right',
    fontSize: '12px',

    top: '300px',
    position: 'sticky',
    height: '500px',
    zIndex: '9',

    '@media (max-width: 900px)': {
      textAlign: 'center',
      height: '60px',
      top: '100px',
    },

    '@media (max-width: 530px)': {
      display: 'none',
      fontSize: '10px',
      height: '20px',
      top: '50px',
    },
  },
  seafood_img_Layer: {
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
});
export default SeafoodStyle;
