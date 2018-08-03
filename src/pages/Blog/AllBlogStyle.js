

import {StyleSheet} from 'aphrodite/no-important';
import {
    FuturaBoldFont,
    LucidaGrandeFontB,
    MetaSerifProBookFont,
} from "../../css/Fonts";


const AllBlogStyle = StyleSheet.create({
    cnt: {
        position: 'relative',
        paddingTop: '80px',
        paddingLeft: '132px',
        textIndent: '0',
        backgroundColor: '#f9f9f9'

    },
    cntFlex: {
        display: "flex",
        position: 'relative',
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "baseline",
        alignContent: "flex-start"
    },
    h1: {
        fontFamily: [FuturaBoldFont, "sans-serif"],
        fontSize: '18px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.78',
        letterSpacing: '0.6px',
        textAlign: 'left',
        margin: '0',
        color: '#000000'
    },
    h2: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: '12px',
        margin: '0',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.4px',
        textAlign: 'left',
        color: 'rgba(31, 35, 44, 0.4)'
    },
    recipeHtmlText: {
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        marginTop: '76px',
        maxWidth: '623px',
        fontSize: '16px',
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "2",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c"

    },
    ingredientsSpan:{
        fontFamily: [LucidaGrandeFontB, "sans-serif"],
        paddingLeft:'40px',
        fontSize: "18px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.78",
        letterSpacing: "0.6px",
        textAlign: "left",
        color: "#000000"
    },
    ingredientsUL:{
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        fontSize: "16px",
        fontWeight: "normal",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "2",
        letterSpacing: "0.5px",
        textAlign: "left",
        color: "#1e232c"
    },
    ingredientsLI:{
        listStyleType:'disc'
    }


});
export default AllBlogStyle