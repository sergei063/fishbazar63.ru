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


    floatMenuBlock: {
        width:'80%',
        '@media (max-width:1150px)': {
            width:'100%',
        },
        '@media (max-width: 900px)': {
            position: "absolute",
            borderRadius: "15px",
            backgroundColor:'white',
            textAlign:"left",
            width:"170px",
            //float: 'left',
            padding:"14px 0px 0px 5px"
        }
    },floatMenuBlockTablet: {
        display:'none',
        '@media (max-width: 900px)': {
            display:'block',
            position: "relative",
            borderRadius: "15px",
            backgroundColor:'white',
            textAlign:"left",
            width:"100%",

            //float: 'left',
            padding:"14px 0px 0px 5px"
        }
    },
    nav_urls: {
        textAlign:'justify',
        /*maxWidth:'1104px',*/
        margin: '0 auto',
        //minWidth:'712px',

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
        alignItems:'baseline',

        '@media (max-width: 900px)': {
            marginLeft: "-35px",
            display:"none"
        }

    },
    menuInlineUlTablet:{
        display:"none",
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'center',
        alignItems:'baseline',
        alignContent:'center',
        '@media (max-width: 900px)': {
            display:'flex'
        }

    },
    mobileMenuBtn:{
        display:"none",
        '@media (max-width: 900px)': {
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