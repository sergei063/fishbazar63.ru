
import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, LucidaGrandeFontB, MetaSerifProBookFont} from "../../../css/Fonts";


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
        height:'72.5px'

    },h59: {
        height:'59px'

    },
    h1: {
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '42px',
        textAlign: 'center',
        fontWeight:'bold',
        fontStyle:'normal',
        fontStretch:'normal',
        lineHeight:'1.19',
        letterSpacing:'1.4px',
        color:'#1e232c',
        height:'50'
    },
    h2: {
        fontFamily: [LucidaGrandeFontB, "sans-serif"],
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
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign:'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.56',
        letterSpacing: '0.5px',
        color: '#000000',
    },
    UL:{
        minWidth:'306px'
    },
    LI:{
        listStyleType:'disc',

        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '16px',
        fontWeight: 'normal',
        textAlign:'left',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '2',
        letterSpacing: '0.5px',
        color: '#1e232c',
    },
    button_bock: {
       /* position:'absolute',
        left:'81px',
        bottom:'37px',*/
        margin: '0 auto',
        maxWidth:'325px',
        lineHeight: '4',
        textAlign: 'center'
    },
    overRecipes:{
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        textDecoration:'underline',
        marginLeft:'24px',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
    },
    table:{
        display: 'table',
        height:'160px',
        margin: '0 auto',
        '@media (max-width: 900px)': {
            display: 'none'
        }
    },
    flexContainer:{
        position:'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start'
    },
    recipeDiv:{
       /* position:'absolute',
        left:'127px',
        top:'50px',*/
        position:'relative',

        maxWidth:'464px',
        width:'30%',
        maxHeight:'435px',
        zIndex:'1',

        boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)'
    },
    recipeDivAbsolute:{
        position:'absolute',
        backgroundColor:"#fff",
        minWidth: '304px',
        left:'55px',
        top:'50px',
        width: '100%'


    },
    fish:{
        /*position:'absolute',
        left:'531px',
        top:'0',*/
        zIndex:'0',
        maxWidth:'704px',
        maxHeight:'440px',
        width:'60%',
        boxShadow: '0 1px 10px 0 rgba(53, 66, 92, 0.08)'
    }



});
export default RecipesBlogStyle;