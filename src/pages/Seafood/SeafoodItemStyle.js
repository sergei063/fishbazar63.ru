import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, MetaSerifProFont, MetaSerifProLightFont} from "../../css/AppStyle";



const SeafoodItemStyle = StyleSheet.create({
    cnt: {
        marginTop: '0px',

        textIndent: '0',
        backgroundColor: '#f9f9f9'

    },
    h1: {
        fontFamily: [FuturaFont, "sans-serif"],
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
        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#ffffff',
    },
    h124:{
        height:'124px'
    },
    flexContainer: {
        display: 'flex',
        height:'500px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'strech',
        alignContent: 'flex-start'
    },
    fishContainer: {
        display:'flex',
        flexDirection:'column',
        flexWrap:'nowrap',
        justifyContent:'flex-start',
        alignItems:'stretch',
        alignContent:'center',
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontSize:'14px'

    },
    infoContainer:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'nowrap',
        justifyContent:' space-between',
        alignItems:'stretch',
        alignContent:'center'
    },
    fishContainerFirst: {

        marginLeft:'211px'


    },
    width40P:{
        width:'40%'
    },
    width50P:{
        width:'50%'
    },

    link: {
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '2',
        cursor: 'pointer',
        color: '#000000',
        fontSize: '12px',
        ':hover': {
            color: '#fe545b',
        }
    },

    price: {
        fontFamily: [FuturaFont, "sans-serif"],
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',

        color: '#7794e6',
        fontSize: '14px'
    },
    aboutDelivery: {
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.71',

        width: '303px',
        fontSize: '14px'
    },
    aboutFish: {
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        fontSize: '14px'
    },
    hidden_text: {
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',

        color: 'rgba(31, 35, 44, 0.4)',
        fontSize: '12px'
    }

});
export default SeafoodItemStyle;