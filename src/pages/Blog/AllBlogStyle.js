import {StyleSheet} from 'aphrodite/no-important';
import {FuturaBoldFont, LucidaGrandeFontB, MetaSerifProBookFont,} from "../../css/Fonts";


const AllBlogStyle = StyleSheet.create({
    cnt: {
        position: 'relative',
        paddingTop: '80px',
        paddingLeft: '132px',
        textIndent: '0',

        '@media (max-width: 600px)':{
            paddingLeft: '35px',
            paddingTop: '33px',
        }

    },
    cntBackground:{
        backgroundColor: '#f9f9f9',
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
    recipeBlock:{
        width: '65%',
        '@media (max-width: 700px)':{
            width: '95%',
        }
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
        textTransform: 'uppercase',
        margin: '0',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.4px',
        textAlign: 'left',
        color: 'rgba(31, 35, 44, 0.4)',
        marginBottom:'14px'
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
        color: "#1e232c",
        '@media (max-width: 700px)':{
            lineHeight: "1.5"
        }

    },
    ingredientsHeader:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center"
    },
    ingredientsSpan:{
        fontFamily: [LucidaGrandeFontB, "sans-serif"],
        paddingLeft:'0px',
        fontSize: "18px",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "1.78",
        letterSpacing: "0.6px",
        textAlign: "left",
        color: "#000000"
    },
    ingredientsSpanPL40:{
        paddingLeft:'40px',
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
    },
    menuBlogFilterStyle:{
        width:'280px',
        '@media (max-width: 1000px)':{
            marginBottom:'56px'
        }
    },

    tabletShow:{
        display:'none',
        '@media (max-width: 1000px)':{
            display:'block'
        }
    },
    tabletHide:{
        display:'block',
        '@media (max-width: 1000px)':{
            display:'none'
        }
    },
    mobileHide:{
        display:'block',
        '@media (max-width: 700px)':{
            display:'none'
        }
    },

    stickyBlock: {
        position: 'sticky',
        top: '120px'


    },
    img:{
        width:'543px',
        height:'339px',
        '@media (max-width: 700px)':{
            width:'280px',
            height:'165px'
        }
    }


});
export default AllBlogStyle