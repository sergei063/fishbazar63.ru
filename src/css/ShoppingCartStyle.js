import {StyleSheet} from 'aphrodite/no-important';
import {
    FuturaBoldFont,
    FuturaFont,
    LucidaGrandeFont,
    LucidaGrandeFontB,
    MetaSerifProBookFont,
    MetaSerifProFont
} from "./Fonts";

const ShoppingCartStyle = StyleSheet.create({

    productCnt: {
        width: '625px',
        margin: '0 auto',
        position: 'relative',
        overflow: "hidden",
        '@media (max-width: 750px)': {
            width: '90%',

        }
    },
    cnt: {
        backgroundColor:'#f9f9f9',
    },
    cntArea: {
        height:'73px',
        '@media (max-width: 900px)': {
           height:'82px'
        },'@media (max-width: 650px)': {
           height:'57px'
        }
    },
    cntAreaConfirmed: {
        height:'193px',
        '@media (max-width: 900px)': {
            height:'165px',
        },'@media (max-width: 650px)': {
           height:'57px'
        }
    },
    h1: {
        fontFamily: [LucidaGrandeFontB, "sans-serif"],
        fontSize: '18px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.19',
        letterSpacing: '1.4px',
        color: '#1e232c',
        marginLeft: '-80px',
        '@media (max-width: 650px)': {
            fontFamily: [FuturaBoldFont, "sans-serif"],
            marginLeft: 'inherit',
        }
    },


    confirmedText: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.75',
        letterSpacing: '0.5px',
        textAlign: 'left',
        color: '#1e232c',
    },

    divTable: {
        display: 'table',
        width: '100%'
    },
    divTableBody: {
        display: 'table-row-group'
    },
    divTableRow: {
        display: 'table-row',

    },
    tableRowText: {
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
    tableRowHeader: {
        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.4px',
        textAlign: 'left',
        color: 'rgba(31, 35, 44, 0.4)',
    },
    tableRowHeaderLine: {
        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '12px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.4px',
        textAlign: 'left',
        color: 'rgba(31, 35, 44, 0.1)',
    },
    divTableCell: {
        display: 'table-cell',
        width:'25%',
        lineHeight: '2.38',
        '@media (max-width: 650px)': {
            width:'50%',

        }
    },

    input: {
        borderRadius: '100px',
        border: 'solid 1px rgba(31, 35, 44, 0.4)',
        width: '166px',
        height: '40px',
        paddingLeft: '20px',
        '@media (max-width: 650px)': {
            width:'80%',

        }
    },
    totalText: {
        textAlign: 'right',
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#1e232c',
        '@media (max-width: 650px)': {
            textAlign: 'left',
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
    deliveryInfo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignContent: 'space-between',
        '@media (max-width: 650px)': {
            flexDirection: 'column-reverse',


        }
    },
    deliveryMan: {
        display: 'block',
        '@media (max-width: 650px)': {
            display: 'none'
        }
    },
    deliveryInfoInputDiv:{
        width:'304px',

        '@media (max-width: 650px)': {
            width:'90%',
            margin:'0 auto'
        }
    },
    ////


    table: {
        borderCollapse: "collapse",
        width: "100%",
        '@media (max-width: 930px)': {
            fontSize: '0.7em'
        },
        '@media (max-width: 750px)': {
            fontSize: '1.2em'

        },
        '@media (max-width: 600px)': {
            fontSize: '0.9em'
        }
        // className={css(ShoppingCartStyle.row)}
    },
    delete_button: {
        width: "15px",
        height: "15px"

    },
    row: {
        textAlign: "left",
        backgroundColor: "#dfdfdf",
        fontSize: "0.7em"
    },
    tdPhoto: {
        maxWidth: "50px",
        width: "30%"
    },
    tdDeleteButton: {}
    , rowOdd: {

        backgroundColor: "#d5d5d5",
        fontSize: "0.7em"
    }, img: {
        width: "150px",
        height: "100px",
        '@media (max-width: 500px)': {
            width: "75px",
            height: "50px",
        }
    },

    coupon:{
        width:'100%',
        alignContent:'center',
        display: "none",
        //display: "grid", //todo временно отключен блок
        gridTemplateColumns: "40px 1fr 1fr 1fr",
        '@media (max-width: 650px)': {
            marginTop:'65px',
            gridRowGap: '32px',
            gridTemplateColumns: "40px 2fr 1fr",
            //gridTemplateRows: '100px 50px'
        }
    },
    couponInfoIcon:{
        marginLeft: '2px',alignSelf:"center"
    },
    couponInfotext:{
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: "12px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "0.4px",
        textAlign: "left",
        color: "rgba(31, 35, 44, 0.4)",

        justifySelf:"center",
        alignSelf:"center",
        '@media (max-width: 650px)': {
            gridColumn: '2 / 3'
        }
    },
    couponInfoNum:{
        '@media (max-width: 650px)': {
            gridColumn: '1 / 3'
        }
    },
    mobileShow:{
        display:'none',
        '@media (max-width: 650px)':{
            display:'block'
        }
    }
});


export default ShoppingCartStyle;