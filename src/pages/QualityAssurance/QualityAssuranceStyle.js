import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, MetaSerifProBookFont, MetaSerifProFont} from "../../css/Fonts";
import {FuturaFont} from "../../css/Fonts";


const QualityAssuranceStyle = StyleSheet.create({
    cnt: {
        marginTop: '0px',
        textIndent: '0',
        backgroundColor: '#fff'

    },
    h116: {
        height:'116px'

    },
    h1: {
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '42px',
        textAlign: 'center',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStretch:'normal',
        lineHeight:'1.19',
        letterSpacing:'1.4px',
        color:'#1e232c',
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

    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',

    },
    seafood_layer2: {
        width: '341px',
        height: '392px'
    },
    w304:{
        width:'304px'
    },
    MR96:{
        marginRight:'96px'
    },

    caption:{
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize:'18px',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStretch:'normal',
        lineHeight:'normal',
        letterSpacing:'0.6px',
        textAlign:'left',
        color:'#7794e6',
    },
    text:{
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c',
    },
    h44:{
        height:'44px'
    },
    h20:{
        height:'20px'
    }




});
export default QualityAssuranceStyle;