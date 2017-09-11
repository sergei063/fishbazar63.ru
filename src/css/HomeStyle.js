import {StyleSheet, css} from 'aphrodite/no-important';


const HomeStyle = StyleSheet.create({
    ul: {},

    li: {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bold',
        color: '#3F51B5',
        display: 'block',
        width: '100%',
        float: 'left',
        transition: 'width .2s',

        marginRight: '5em',
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
        }
    }


});
export default HomeStyle;