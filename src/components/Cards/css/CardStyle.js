import {StyleSheet} from 'aphrodite/no-important';
import {FuturaMediumFont, MetaSerifProBookFont, MetaSerifProFont} from "../../../css/Fonts";




const CardStyle = StyleSheet.create({
    displayNone:{
        display:'none'
    },
    ul: {
        listStyle: 'none',
        maxWidth: '1334px',
        display: 'flex',
        padding:'0px',
        margin:'0px',

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        alignContent: 'stretch',
        '@media (max-width: 500px)': {
            marginRight:'0px',
            padding:'0px'
        }

    },

    li: {
        position: "relative",
        color: '#1e232c',
        display: 'block',
        width: '318px',
        transition: 'width .2s',
        marginBottom: '32px',
        marginLeft: '16px',
        listStyle: 'none',
        fontSize: '24px',
        //fontSize:'1.5vw',
        boxShadow: ' 0 1px 10px 0 rgba(53, 66, 92, 0.08)',

        ':hover': {
            color: '#fe545b'
            //boxShadow: '15px 15px 15px rgba(0, 0, 1, 0.06)',
        }

    },
    pouchHit:{
        position:'absolute',
        borderRadius: '100px',
        width: '53px',
        height: '53px',
        backgroundColor: '#fe545b',
        right:'0px',
        top:'-13px',
        zIndex:'1',
        ':nth-child(1n) > :first-child':{

            position:'absolute',
            color:'#fff',
            left: '17px',
            top: '17px',
            fontFamily: [FuturaMediumFont, 'sans-serif'],
            fontSize: '14px'
        }
    },
    card: {
        display: 'block',
        height: "250px",
        //borderRadius: '3px',
        position: 'relative',
        background: '#fff',
        padding: '0 0px 20px 0',
        textDecoration: 'none',
        zIndex: '0',

    },
    productPhoto: {
        position: 'relative',
        paddingBottom: '60%',
        overflow: 'hidden'
    },
    productPhotoImg: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        maxWidth: '100%',
        width: '100%',
        maxHeight: '100%',
        //margin: 'auto',
        transition: 'transform .4s ease-out',
        ':hover': {
            transform: 'scale(1.05)'
        }
    },
    productNameDiv: {
        position: "relative",
        width: "95%",
        textIndent: "0.1em",

        borderSpacing: '17px 8px',
        display: "table",
        overflow: "hidden",
        textAlign: 'left',

    },
    productName: {
        textAlign: 'centr',
        textIndent: "0.1em",
        display: "table-cell",
        fontFamily: [MetaSerifProBookFont, 'sans-serif'],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.5px',

        ':hover': {
            color: '#fe545b'
        }
    },
    productPrice: {
        fontFamily: [MetaSerifProFont, 'sans-serif'],
        color: '#7794e6',
        fontSize:'14px',
        display: "table-cell",
        textAlign: "right",
    },
    productWeightFish: {
        fontSize: '12px',
        fontFamily: [MetaSerifProFont, 'sans-serif'],
        fontWeight: 'normal',
        display: 'table-row',
        color: 'rgba(31, 35, 44, 0.4)',

        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.4px',
    }


});
export default CardStyle;