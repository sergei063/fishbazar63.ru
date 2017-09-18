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
        background: "#424242 url(" + require('../img/bg_pouch.png') + ") no-repeat 50% 13px",
        height: '44px', width: '44px',
        borderRadius: '44px',
        float: 'left',
        position: 'relative',
        ':hover span': {
            background: '#3fa59e',
            boxShadow: 'none',
            border: '1px solid #3fa59e'
        }
    },
    pouch_a_span: {

        position: 'absolute',
        top: '-4px',
        right: '-6px',
        display: 'block',
        background: '#c1953d',
        fontSize: '12px',
        lineHeight: '19px',
        height: '19px',
        width: '19px',
        textAlign: 'center',
        borderRadius: '19px',
        border: '1px solid #b0893e',
        boxShadow: 'inset 0 20px 20px -10px #eec77c',
        color: '#fff',
        textShadow: '0 1px #634d23',
        webkitFontSmoothing: 'auto'
    }

});
export default HeaderStyle;