
import { StyleSheet, css } from 'aphrodite/no-important';



const HomeStyle = StyleSheet.create({
    ul:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'space-around'
    },

    li: {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bold',
        color: '#3F51B5',
        display: 'inline',
        flex: '1',
        marginRight: '5em',
        listStyle: 'none',
        fontSize: '2em',
        boxShadow:'0 2px 10px rgba(0, 0, 1, 0.06)',
        backgroundColor: 'white',
        ':hover': {
            backgroundColor: 'red',
            color: 'white'
        },
        '@media (max-width: 750px)': {

            fontSize:'1.8em',
            marginRight: '3em',
        }
    }


});
export default HomeStyle;