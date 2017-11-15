import {StyleSheet, css} from 'aphrodite/no-important';

const ShoppingCartStyle = StyleSheet.create({
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
    delete_button:{
        width:"15px",
        height:"15px"

    },
    row: {
        textAlign:"left",
        backgroundColor:"#dfdfdf",
        fontSize: "0.7em"
    },
    tdPhoto:{
        maxWidth:"50px",
        width:"30%"
    },
    tdDeleteButton:{

    }
    ,rowOdd: {

        backgroundColor:"#d5d5d5",
        fontSize: "0.7em"
    } ,img: {
        width:"150px",
        height:"100px",
        '@media (max-width: 500px)': {
            width:"75px",
            height:"50px",
        }
    }
});


export default ShoppingCartStyle;