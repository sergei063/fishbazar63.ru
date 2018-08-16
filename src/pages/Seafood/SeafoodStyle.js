
import {StyleSheet} from 'aphrodite/no-important';



const SeafoodStyle = StyleSheet.create({
    cnt: {

        backgroundColor:'#fff',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignContent: 'stretch',

        width: '100%',
        marginTop: '118px',
        position: 'relative',
        overflow: "hidden",
        '@media (max-width: 900px)': {
            flexDirection: 'column-reverse',
            marginTop: '48px',
        }
    },
    textAlignCenter: {textAlign: 'center'}
    ,catalogGroupsDiv:{
        textAlign: 'right',
        '@media (max-width: 900px)': {
            textAlign: 'center',
        },

        '@media (max-width: 530px)': {
            display:'none',
        }
    },
    seafood_img_Layer:{
        '@media (max-width: 900px)': {
            display: 'none',
        }
    }
});
export default SeafoodStyle;