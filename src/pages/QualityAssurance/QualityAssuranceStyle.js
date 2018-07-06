import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, MetaSerifProFont} from "../../css/AppStyle";


const QualityAssuranceStyle = StyleSheet.create({
    cnt: {
        marginTop: '160px',
        textIndent: '0',
        backgroundColor: '#fff'

    },
    h116: {
        height:'116px'

    },
    h1: {
        fontFamily: [FuturaFont, "sans-serif"],
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
        height: '395px'
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
        fontFamily: [FuturaFont, "sans-serif"],
        fontSize:'22px',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStretch:'normal',
        lineHeight:'normal',
        letterSpacing:'0.6px',
        textAlign:'left',
        color:'#7794e6',
    },
    text:{
        fontFamily: [MetaSerifProFont, "sans-serif"],
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
    }




});
export default QualityAssuranceStyle;