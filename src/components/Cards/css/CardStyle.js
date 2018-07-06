import {StyleSheet} from 'aphrodite/no-important';
import {MetaSerifProFont} from "../../../css/AppStyle";




const CardStyle = StyleSheet.create({
    displayNone:{
        display:'none'
    },
    ul: {
        listStyle: 'none',
        maxWidth: '1334px',
        display: 'flex',


        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'baseline',
        alignContent: 'stretch'

    },

    li: {
        position: "relative",
        color: '#3F51B5',
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
            //color: 'white',
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
            left: '-11px',
            top: '17px',
            fontSize: '14px'
        }
    },
    card: {
        display: 'block',
        fontSize: '21px',
        height: "250px",
        //borderRadius: '3px',
        position: 'relative',
        background: '#fff',
        margin: '0 0px 20px 0',
        textDecoration: 'none',
        color: '#1e232c',
        zIndex: '0',
        ':hover': {
            color: '#fe545b'
        }
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
        fontFamily: [MetaSerifProFont, 'sans-serif'],
    },
    productPrice: {
        fontFamily: [MetaSerifProFont, 'sans-serif'],
        color: '#7794e6',
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