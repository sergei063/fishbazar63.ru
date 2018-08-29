import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, MetaSerifProBookFont, MetaSerifProFont} from "../../css/Fonts";


const QualityAssuranceStyle = StyleSheet.create({
    cnt: {
        marginTop: '0px',
        textIndent: '0',
        backgroundColor: '#fff'
    },
    cnt_grey: {
        backgroundColor: '#f9f9f9'
    },
    quality_assurance_area: {
        height:'116px',
        '@media (max-width: 900px)': {
            height:'56px',
        }

    },
    mobileShow:{
        display:'none',
        '@media (max-width: 500px)': {
            display:'block',
        }
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
        '@media (max-width: 500px)': {
            fontSize: '18px',
        }
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
    flexContainer2: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        '@media (max-width: 900px)': {
            flexDirection: 'column',
        }
    },
    seafood_layer2: {
        width: '341px',
        height: '392px',
        '@media (max-width: 500px)': {
            display:'none'
        }
    },
    w304:{
        width:'304px',
        '@media (max-width: 500px)': {
            width:'90%',
        }
    },
    MR96:{
        marginRight:'96px',
        '@media (max-width: 500px)': {
            margin:'0 auto',
        }
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
    },
    h116:{
        height:'116px'
    }




});
export default QualityAssuranceStyle;