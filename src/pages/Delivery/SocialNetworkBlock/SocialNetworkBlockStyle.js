import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, MetaSerifProBookFont} from "../../../css/Fonts";


const SocialNetworkBlockStyle = StyleSheet.create({
    cnt: {
        position:'relative',
        marginTop: '0px',
        textIndent: '0',
        backgroundColor: '#3454b0'

    },
    delivery_small:{
        position:'absolute',
        right:'0',
        bottom:'-116px',
        width:"273px",
        height:"463px",
        zIndex:'2',
        '@media (max-width: 900px)': {
            width:"154px",
            height:"261px",
            bottom:'11px',
        }
    },
    h1: {
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.6px',
        textAlign: 'left',
        color: '#ffffff',
        flex: '0 0 73px',
        '@media (max-width: 500px)': {
            fontSize: '16px',
        }
    },
    h2: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.5px',
        maxWidth:'306px',
        textAlign: 'left',
        color: '#ffffff',
        flex: '0 0 80px',
        '@media (max-width: 500px)': {
            maxWidth:'227px',
            textAlign: 'center',
            lineHeight: "normal",

        }
    },
    PL20:{
        paddingLeft:'20px'
    },
    h116: {
        height: '116px'

    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        height: '395px',
        '@media (max-width: 500px)':{
            height: '348px',
        }
    },

    flexContainerInfoRow: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignContent: 'stretch',
        paddingLeft: '96px',
        paddingTop: '89px',
        '@media (max-width: 500px)':{
            alignItems: "center",
            padding: "0",
            width: "100%",
            justifyContent:'center'
        }
    },

    flexContainerInfoCell: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignContent: 'stretch'
    },

    width40Percent: {
        width: '40%',
        maxWidth: '595px',
        '@media (max-width: 500px)': {
           display:'none'
        }
    },
    width30Percent: {
        width: '30%'
    }, width70Percent: {
        width: '70%'
    },


    inst_normal: {
        width: '60px',
        height: '60px',
        objectFit: 'contain',
        ':hover': {
            opacity: '0.8',
        }
    },




});
export default SocialNetworkBlockStyle;