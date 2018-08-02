import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, FuturaMediumFont, MetaSerifProBookFont, MetaSerifProLightFont} from "../../css/Fonts";
import {FuturaFont, MetaSerifProFont} from "../../css/Fonts";



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
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        marginLeft:'211px',
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c"

    },
    width40P:{
        width:'40%'
    },
    width50P:{
        width:'50%'
    },

    link: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '2',
        cursor: 'pointer',
        color: '#1e232c',
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
    name: {
        fontFamily: [FuturaMediumFont, "sans-serif"],
        fontSize: "18px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.78",
        letterSpacing: "0.6px",
        textAlign: "left",
        color: "#000000"
    },
    aboutDelivery: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c",

        width: '303px'
    },
    nameDiv: {
        fontFamily: [MetaSerifProLightFont, "sans-serif"],
        fontSize: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.71",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c"
    },
    aboutFish: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.5",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c"
    },
    hidden_text: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: "12px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "0.4px",
        textAlign: "left",
        color: "rgba(31, 35, 44, 0.4)"
    }
    ,withBuy:{
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: "18px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "0.6px",
        textAlign: "center",
        color: "#7794e6"
    },
    withBuyDiv:{
        margin:'0 auto',
       width: '80%'
    }

});
export default SeafoodItemStyle;