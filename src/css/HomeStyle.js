import {StyleSheet, css} from 'aphrodite/no-important';


const HomeStyle = StyleSheet.create({

    cnt: {
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        overflow:"hidden",
        '@media (max-width: 1400px)': {
            margin: '0'
        }
    },
    ul: {
        listStyle: 'none',

        //margin: '0  0px 0 0',
        //padding: '0'
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
        //fontSize:'1.5vw',
        boxShadow: '5px 2px 10px rgba(0, 0, 1, 0.06)',

        ':hover': {
            color: 'white',
            boxShadow: '15px 15px 15px rgba(0, 0, 1, 0.06)',
        },
        '@media (min-width: 750px)': {
            marginRight: '3em',

        },
        '@media (min-width: 450px)': {
            width: '40%',
            marginLeft: '0.5em',
            fontSize: '3vw'

        },
        '@media (max-width: 450px)': {
            width: '100%',
            marginLeft: '-1em',
            fontSize: '5.8vw'

        },
        '@media (min-width: 768px)': {
            width: '25%',
            fontSize:'1.5vw',
        },
        '@media (min-width: 1100px)': {
            width: '20%',
            fontSize: '1.6em',
        }
    },
    card: {
        display: 'block',
        border: '1px dotted #c1c0c1',
        minHeight:"320px",
        //borderRadius: '3px',
        position: 'relative',
        background: '#fff',
        margin: '0 0px 20px 0',
        textDecoration: 'none',
        color: '#474747',
        zIndex: '0',

        '@media (max-width: 1644px)': {
            minHeight:"270px",

        },'@media (max-width: 1500px)': {
            minHeight:"240px",
        },  '@media (max-width: 1100px)': {
            minHeight:"220px",
        }, '@media (max-width: 950px)': {
            minHeight:"180px",
        }, '@media (max-width: 765px)': {
            minHeight:"290px",
        }, '@media (max-width: 350px)': {
            minHeight:"220px",
        }
    },
    productPhoto: {
        position: 'relative',
        paddingBottom: '70%',
        overflow: 'hidden'
    },
    productName: {
        textAlign:'centr',
        textIndent:"0.1em",
        paddingLeft:"0.3em",
        display:"table-cell",
        fontFamily: 'Vollkorn SC'
    },
    productNameDiv: {
        position:"relative",
        width:"95%",
        textIndent:"0.1em",
        display:"table",
        overflow:"hidden",
        textAlign:'left',

    },
    productPrice: {
        fontFamily: 'Vollkorn SC',
        display:"table-cell",
       textAlign:"right",
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
    }


});
export default HomeStyle;