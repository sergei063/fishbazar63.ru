
import {StyleSheet} from 'aphrodite/no-important';
import {FuturaFont, MetaSerifProFont} from "../../../css/AppStyle";


const RecipesBlogStyle = StyleSheet.create({
    cnt: {
        marginTop: '160px',
        height:'779px',
        textIndent: '0',
        backgroundColor: '#f9f9f9'

    },
    h116: {
        height:'116px'

    },
    h72: {
        height:'72px'

    },h59: {
        height:'59px'

    },
    h1: {
        fontFamily: [FuturaFont, "sans-serif"],
        fontSize: '42px',
        textAlign: 'center',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStretch:'normal',
        lineHeight:'1.19',
        letterSpacing:'1.4px',
        color:'#1e232c',
    },
    h2: {
        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:'center',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.5px',
        color: '#7794e6',
    },
    h3: {
        display: 'table',
        margin: '0 auto',
        minWidth:'306px',
        fontFamily: [FuturaFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.39',
        letterSpacing: '0.5px',
        color: '#000000',
    },
    UL:{
        minWidth:'306px'
    },
    LI:{
        listStyleType:'disc',

        fontFamily: [MetaSerifProFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign:'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '2',
        letterSpacing: '0.5px',
        color: '#1e232c',
    },
    table:{
        display: 'table',
        margin: '0 auto'
    },
    flexContainer:{
        position:'relative'
       /* display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start'*/
    },
    recipeDiv:{
        position:'absolute',
        left:'127px',
        top:'50px',
        backgroundColor:"#fff",
        width:'464px',
        zIndex:'1',
        height:'435px',
        boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)'
    },
    fish:{
        position:'absolute',
        left:'531px',
        top:'0',
        zIndex:'0',
        width:'464px',
        height:'435px',
        boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)'
    }



});
export default RecipesBlogStyle;