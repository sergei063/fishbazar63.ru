import { StyleSheet, css } from 'aphrodite/no-important';



const AboutStyle = StyleSheet.create({

    text: {
        fontFamily:'Noto Serif, serif',
        color:'#3F51B5',
        paddingTop:'2em',
        fontSize:'2em',
        '@media (max-width: 750px)': {

            fontSize:'1em',
            padding: '0.2em',
        }


    }
});
export default AboutStyle;