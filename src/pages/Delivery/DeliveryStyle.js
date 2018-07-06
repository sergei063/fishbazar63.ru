import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, MetaSerifProFont} from "../../css/AppStyle";


const DeliveryStyle = StyleSheet.create({
    cnt: {
        marginTop: '0px',
        textIndent: '0',
        height:'779px',
        backgroundColor:'#f9f9f9'

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
    h116: {
        height:'116px'

    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch'
    },

    flexContainerInfoRow: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        alignContent: 'stretch'
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
        width: '40%'
    },
    width30Percent: {
        width: '30%'
    }, width70Percent: {
        width: '70%'
    },
    columnCaption: {
        fontFamily: [FuturaFont, "sans-serif"],
        fontSize: '22px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.6px',
        textAlign: 'left',
        color: '#7794e6',
        ':nth-child(1n) > :first-child':{
            fontSize: '15px',
            marginTop: '16px',
            fontWeight: '500',
            letterSpacing: '0.4px',
        }
    },
    columnText: {
        fontFamily: [MetaSerifProFont, 'sans-serif'],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c'
    },
    redText: {
        color: '#fe545b'
    }


});
export default DeliveryStyle;