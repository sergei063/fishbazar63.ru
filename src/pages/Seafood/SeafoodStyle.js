
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
        '@media (max-width: 1400px)': {}
    },
    textAlignCenter: {textAlign: 'center'}
});
export default SeafoodStyle;