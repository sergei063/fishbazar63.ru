import {StyleSheet, css} from 'aphrodite/no-important';

const HeaderStyle = StyleSheet.create({

    siteTitle: {
        fontFamily: 'Merriweather, serif',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: '2em',
        color: 'white'

    },
    div: {
        height: '44px', width: '44px',
    },
    headBarUl: {
        listStyle: 'none',
        padding: '0px 19px 0 0'
    },
    headBarLI: {
        padding: '0 0 20px 12px',
        position: 'relative',
        float: 'left'
    },
    pouchA: {
        background: "#ffffff url(" + require('../img/bucket/normal.png') + ") no-repeat 50% 19px",
        height: '68px', width: '68px',
        borderRadius: '44px',
        position: 'absolute',
        top:'19px',
        right:'27px',
        ':hover': {
            backgroundImage: "url(" + require('../img/bucket/hover.png') + ")",
        },
        ':hover span': {
            background: '#fe545b',
            boxShadow: 'none'
            /*border: '1px solid #fe545b'*/
        }
    },
    pouchInstagram: {
        background: "#424242 url(" + require('../img/bg_pouch_inst.png') + ") no-repeat 50% 13px",
        height: '44px', width: '44px',
        borderRadius: '44px',
        float: 'left',
        position: 'relative',
        ':hover': {
            backgroundColor: '#697a7c'
        }
    },
    pouchVk: {
        background: "#424242 url(" + require('../img/bg_pouch_vk.png') + ") no-repeat 50% 13px",
        height: '44px', width: '44px',
        borderRadius: '44px',
        float: 'left',
        position: 'relative',
        ':hover': {
            backgroundColor: '#697a7c'
        }
    },

    pouch_a_span: {

        position: 'absolute',
        bottom: '13px',
        right: '17px',
        display: 'block',
        background: '#fe545b',
        fontSize: '12px',
        lineHeight: '19px',
        height: '20px',
        width: '20px',
        textAlign: 'center',
        borderRadius: '20px',
        /*border: '1px solid #b0893e',
        boxShadow: 'inset 0 20px 20px -10px #eec77c',*/
        color: '#fff',
        textShadow: '0 1px #634d23',
        webkitFontSmoothing: 'auto'
    },
    floatMenuBlock: {


        '@media (max-width: 750px)': {
            position: "absolute",
            borderRadius: "15px",
            backgroundColor:'white',
            textAlign:"left",
            width:"40%",
            float: 'left',
            padding:"14px 0px 0px 5px"
        }
    },
    nav_urls: {
        textAlign:'justify',
        width:'80%',
        /*maxWidth:'1104px',*/
        marginLeft: '3%',
        minWidth:'712px'
    },
    phoneNumberMenuBlock: {

        float: 'left',
        padding:"14px 0px 0px 5px",
        fontFamily:"Vollkorn SC, sans-serif",
        fontSize:"2.5em",
        '@media (max-width: 770px)': {
            display:"none"
        }
    },
    menuInlineUl:{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        alignItems:'center',

        '@media (max-width: 750px)': {
            marginLeft: "-35px",
            display:"none"
        }

    },
    mobileMenuBtn:{
        display:"none",
        '@media (max-width: 750px)': {
            display:"inline-block",
            position:"relative"

        }

    },
    pouchMobileMenu: {
        background: "#424242 url(" + require('../img/iconmenu.png') + ") no-repeat 50% 13px",
        height: '44px', width: '44px',
        borderRadius: '44px',
        float: 'left',
        position: 'relative',
        ':hover': {
            backgroundColor: '#697a7c'
        }
    },pouchPhoneMenu: {
        background: "#424242 url(" + require('../img/phone_pounch.png') + ") no-repeat 50% 13px",
        height: '44px', width: '44px',
        borderRadius: '44px',
        float: 'left',
        position: 'relative',
        ':hover': {
            backgroundColor: '#697a7c'
        }
    }


});
export default HeaderStyle;