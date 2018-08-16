import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, LucidaGrandeFont, MetaSerifProFont} from "./Fonts";

const ShoppingCartStyle = StyleSheet.create({

    productCnt: {
        width: '625px',
        margin: '0 auto',
        position: 'relative',
        overflow: "hidden",
        '@media (max-width: 750px)': {
            width: '100%',

        }
    },
    h1: {
        fontFamily: [LucidaGrandeFont, "sans-serif"],
        fontSize: '18px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.19',
        letterSpacing: '1.4px',
        color: '#1e232c',
        marginLeft: '-80px'
    },
    confirmedText: {
        fontFamily: [MetaSerifProFont, "sans-serif"],
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
        lineHeight: '2.38'
    },

    input: {
        borderRadius: '100px',
        border: 'solid 1px rgba(31, 35, 44, 0.4)',
        width: '166px',
        height: '40px',
        paddingLeft: '20px',
        '::placeholder': {}
    },
    totalText: {
        textAlign: 'right',
        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#1e232c',
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
            display:'none'

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
    }
});


export default ShoppingCartStyle;