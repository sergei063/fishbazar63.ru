import {StyleSheet, css} from 'aphrodite/no-important';

const menu_inline_ul = {
    listStyleType: 'disc',
    webkitMarginBefore: '1em',
    webkitMarginAfter: '1em',
    webkitMarginStart: '0px',
    webkitMarginEnd: '0px',
    webkitPaddingStart: '40px'
}
const sliderBase = {
    position: 'relative',
    //minWidth: '100%',
    height: '45vh',
    minHeight: '430px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'table',
    textShadow: 'black 0.1em 0.1em 0.2em',
    transition: 'background 2s ease 0s',
    minWidth: '10px',
    width: '100%'
}



const coolFont = {
    fontFamily: 'MYRIADPRO-REGULAR',
    src: ' url("' + require('../fonts/MYRIADPRO-REGULAR.eot') + '"), url("' + require('../fonts/MYRIADPRO-REGULAR.eot?#iefix') + '") format("embedded-opentype"), url("' + require('../fonts/MYRIADPRO-REGULAR.woff') + '") format("woff")',
    fontWeight: 'normal',
    fontStyle: 'normal'
};

export const SourceSansProRegularFonts = {
    fontFamily: "SourceSansProRegular",
    src: 'url("'+require('../fonts/SourceSansPro/SourceSansProRegular/SourceSansProRegular.eot')+'"),src: url("'+require('../fonts/SourceSansPro/SourceSansProRegular/SourceSansProRegular.eot?#iefix')+'")format("embedded-opentype"),    url("'+require('../fonts/SourceSansPro/SourceSansProRegular/SourceSansProRegular.woff')+'") format("woff"),    url("'+require('../fonts/SourceSansPro/SourceSansProRegular/SourceSansProRegular.ttf')+'") format("truetype")',
    fontStyle: 'normal',
    fontWeight: 'normal',
};


const AppStyle = StyleSheet.create({

    displayNone: {display: 'none'},
    displayBlock: {display: 'block'},
    bottomLine: {borderBottom: '1px dotted #c4c4c4'},
    textAlignRigh: {textAlign: 'right'},
    textAlignLeft: {textAlign: 'left'},

    slider: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/fishmarket.jpg') + "),url(" + require('../img/fons/boy.jpg') + "),url(" + require('../img/fons/mintai.jpg') + "), url(" + require('../img/fons/krevetki.jpg') + "), url(" + require('../img/fons/abstract.jpg') + ")",
        '@media (max-width: 750px)': {
            backgroundImage: "url(" + require('../img/fons/mobile/fishmarket.jpg') + ")",
            '@media (max-width: 750px)': {
                backgroundImage: "url(" + require('../img/fons/mobile/fishmarket.jpg') + ")",
                fontSize: '0.7em',
                height: '45vh',
                minHeight: '0'

            }
        }
    },
    slider_line: {
        maxWidth: '675px',
        width:"50%",
        margin: 'auto', borderTop: '2px solid #fff'
    },
    slider_1: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/boy.jpg') + ")",
        '@media (max-width: 750px)': {
            backgroundImage: "url(" + require('../img/fons/mobile/boy.jpg') + ")",
            fontSize: '0.7em',
            height: '45vh',
            minHeight: '0',
        }


    },
    slider_2: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/mintai.jpg') + ")",
        '@media (max-width: 750px)': {
            backgroundImage: "url(" + require('../img/fons/mobile/mintai.jpg') + ")",
            fontSize: '0.7em',
            height: '45vh',
            minHeight: '0',
        }

    },
    slider_3: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/krevetki.jpg') + ")",
        '@media (max-width: 750px)': {
            backgroundImage: "url(" + require('../img/fons/mobile/krevetki.jpg') + ")",
            fontSize: '0.7em',
            height: '45vh',
            minHeight: '0',
        }
    },
    slider_4: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/krevetki2.jpg') + ")",
        '@media (max-width: 750px)': {
            backgroundImage: "url(" + require('../img/fons/mobile/krevetki2.jpg') + ")",
            fontSize: '0.7em',
            height: '45vh',
            minHeight: '0',
        }
    },


    siteTitle: {
        fontFamily: 'Lobster, sans-serif',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: '2em',
        color: 'white',
        '@media (max-width: 1020px)': {
            fontSize: '1em',
        },
        '@media (max-width: 1500px)': {
            fontSize: '1.5em',
        }

    },
    sliderText: {
        fontFamily: 'Lobster',
        fontSize: '1.3em'

    },
    clearBoth:{
        clear:'both'
    },

    prev: {
        position: 'absolute',
        left: '30px',
        top: '178px',
        background: "url(" + require('../img/slider_nav.png') + ") no-repeat",
        height: '57px',
        width: '151px',
        display: 'block',
        zIndex: '99',
        transition: 'left 2s ease 0s',
        ':hover':{
            left:'0'
        },
        '@media (max-width: 750px)': {
          display:"none"
        }
    },

    next: {
        position: 'absolute',
        right: '30px',
        top: '178px',
        background: "url(" + require('../img/slider_nav.png') + ") no-repeat -151px 0",
        height: '57px',
        width: '151px',
        display: 'block',
        zIndex: '99',
        transition: 'right 2s ease 0s',
        ':hover':{
            right:'0'
        },
        '@media (max-width: 750px)': {
            display:"none"
        }
    },

    marginAuto: {
        margin: '0 auto'
    },
    displayInline: {
        display: 'inline',
    },
    marginRight15: {
        marginRight: '1.5em'
    },

    red_link: {
        color: 'red',
        ':hover':{
            borderBottom: '2px solid red'
        }
    },
    center_text: {
        textAlign: 'center'
    },
    right_text: {
        textAlign: 'right'
    },
    floatRight: {
        float: 'right'
    },

    blue_text: {
        color: '#3F51B5'
    },


    menu_inline: {
        fontFamily: [coolFont, "sans-serif"],
        color: '#212121',
        display: 'inline-block',
        marginRight: '2em',
        fontSize: '1.1em',
        //backgroundColor: 'white',
        ':hover': {
            borderBottom: '2px solid #cda659'
        },
        '@media (max-width: 750px)': {
            marginRight: '0.5em',
            fontSize: '1.5em',
            textAlign: 'left',
            lineHeight: '1.5em',
            display: 'block'
        }
    },
    menu_inline_ul: {
        ...menu_inline_ul
        ,backgroundColor:"white"
        , transition: 'transform 0.4s ease 0s, background 0.4s ease 0s'
    },
    menu_inline_ul_scroll: {
        ...menu_inline_ul,
        width: '100%',
        opacity: '0.9',
        textAlign: 'center',
        top: '0px',
        position: 'fixed',
        //transition: 'top 2s',
        zIndex: 999999,
        transition: 'transform 0.4s ease 0s, background 0.4s ease 0s',
        boxShadow: '10px 10px 10px rgba(0, 0, 1, 0.06)'

    },

    //example
    hover: {
        ':hover': {
            backgroundColor: 'red'
        }
    },
    button: {
        color: '#fff',
        fontFamily: [coolFont, "sans-serif"],
        textDecoration: 'none',
        userSelect: 'none',
        background: 'rgb(212,75,56)',
        padding: '.7em 1.5em',
        outline: 'none',
        cursor: 'pointer',
        ':hover': {
            background: 'rgb(232,95,76)',
        },
        ':active': {
            background: 'rgb(152,15,0);',
        }
    },
    link: {
        fontFamily: [coolFont, "sans-serif"],
        cursor: 'pointer',
        color: '#212121',
        fontSize: '1.5em',
        ':hover': {
            borderBottom: '2px solid #cda659'
        }
    }, link_active: {
        borderBottom: '2px solid #cda659',
        fontFamily: [coolFont, "sans-serif"],
        cursor: 'pointer',
        color: '#212121',
        fontSize: '1.5em',
    },

    small: {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
        }
    }
});
export default AppStyle;