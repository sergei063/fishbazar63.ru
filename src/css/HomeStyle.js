import {StyleSheet, css} from 'aphrodite/no-important';


const HomeStyle = StyleSheet.create({
    cnt:{
        width: document.body.clientWidth*0.7,
        paddingLeft:'7%',
        margin: '0 auto',
        '@media (max-width: 1350px)': {
            paddingLeft:'0%'
        },
    },
    ul: {
        listStyle: 'none',
        margin: '0  0px 0 0',
        padding: '0'
    },

    li: {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bold',
        color: '#3F51B5',
        display: 'block',
        width: '100%',
        float: 'left',
        transition: 'width .2s',
        marginLeft: '2em',
        listStyle: 'none',
        fontSize: '1.3em',
        boxShadow: '5px 2px 10px rgba(0, 0, 1, 0.06)',

        ':hover': {
            color: 'white',
            boxShadow: '15px 15px 15px rgba(0, 0, 1, 0.06)',
        },
        '@media (max-width: 750px)': {
            fontSize: '1.8em',
            marginRight: '3em',
        },
        '@media (min-width: 450px)': {
            width: '50%'
        },
        '@media (min-width: 768px)': {
            width: '33.333%'
        },
        '@media (min-width: 1020px)': {
            width: '20%'
        }
    },
    card: {
        display: 'block',
        border: '1px dotted #c1c0c1',
        //borderRadius: '3px',
        position: 'relative',
        background: '#fff',
        margin: '0 0px 20px 0',
        textDecoration: 'none',
        color: '#474747',
        zIndex: '0'
    },
    productPhoto: {
        position: 'relative',
        paddingBottom: '100%',
        overflow: 'hidden'
    },
    productName: {
        fontSize:'1.5em',
        fontFamily: 'Open Sans Condensed'
    },
    productNameDiv: {
        textAlign:'center',
    },
    productPrice: {
       fontSize:'1.3em',
    },
    productPhotoImg: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        transition: 'transform .4s ease-out',
        ':hover': {
            transform: 'scale(1.05)'
        }
    }


});
export default HomeStyle;