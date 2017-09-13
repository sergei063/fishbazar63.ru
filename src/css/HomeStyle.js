import {StyleSheet, css} from 'aphrodite/no-important';


const HomeStyle = StyleSheet.create({
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
        marginLeft: '1em',
        listStyle: 'none',
        fontSize: '2em',
        boxShadow: '0 2px 10px rgba(0, 0, 1, 0.06)',
        backgroundColor: 'white',
        ':hover': {
            backgroundColor: 'red',
            color: 'white'
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
        '@media (min-width: 1000px)': {
            width: '20%'
        }
    },
    card: {
        display: 'block',
        border: '1px solid #b5e9a7',
        borderRadius: '3px',
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