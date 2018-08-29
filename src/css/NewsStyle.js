import { StyleSheet} from 'aphrodite/no-important';
import SourceSansProRegularFonts from './AppStyle'


const NewsStyle = StyleSheet.create({

    cnt: {
        width:'100%',
        position:'relative',
        paddingTop:'2em',



    },text: {
        fontFamily: [SourceSansProRegularFonts, "sans-serif"],
        color:'#333333',
        width:'70%',
        textIndent:'0em',
        margin: '0 auto',
        fontSize:'1.3em',
        '@media (max-width: 750px)': {
            fontSize:'1em',
            padding: '0.2em',
        }

    },
    line: {
        width:'50%',
        margin:'0 auto'

    },
    dateNews:{
        fontFamily: [SourceSansProRegularFonts, "sans-serif"],
        textAlign:'left',
        color:'#697a7c',
        fontSize:'0.7em'

    }
});
export default NewsStyle;