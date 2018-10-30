import {StyleSheet} from 'aphrodite/no-important';

const RecipesStyle = StyleSheet.create({
  video: {
    width: '480px',
    height: '480px',
    '@media (max-width: 630px)': {
      width: '260px',
      height: '260px',
    },
    '@media (max-width: 1500px)': {
      fontSize: '1.5em',
    },
  },
});
export default RecipesStyle;
