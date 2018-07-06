import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, MetaSerifProFont} from "../../../css/AppStyle";


const SocialNetworkBlockStyle = StyleSheet.create({
    cnt: {
        marginTop: '0px',
        textIndent: '0',
        backgroundColor: '#3454b0'

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
        height: '395px'
    },

    flexContainerInfoRow: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch',
        paddingLeft: '96px',
        paddingTop: '89px'
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
        maxWidth: '595px'
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