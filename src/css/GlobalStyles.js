import {StyleSheet} from 'aphrodite/no-important';

const GLOBALS = '__GLOBAL_STYLES__';

const globalExtension = {
    selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
        (baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null),
};

const extended = StyleSheet.extend([globalExtension]);

const styles = StyleSheet.create({
    [GLOBALS]: {
        html: {
            height: '100%',
            width: '100%',
            margin: '0px',
            padding: '0px',
            fontSize:'14px',
            '@media (max-width: 600px)': {
                fontSize: '10',
            }

        },
        a:{textDecoration: 'none',
            color: 'inherit',
            cursor:'pointer'
        },



        body: {
            /*backgroundImage: "url(" + require('../img/fon.jpg') + ")",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'right top',
            backgroundPositionX: '0px',
            backgroundPositionY: '0px',*/
            margin: '0px',
            padding: '0px',
            backgroundRepeat: 'no-repeat'
        },
        main: {
            left: '10%',
            backgroundColor: "white",
            width: document.body.clientWidth*0.7,
            margin: '0 auto',
            textIndent: '2em',
            padding:'10px',
            '@media (max-width: 750px)': {
                top: '25%',
                width:'100%',
                height:'60%'
            }
        },
        nav: {
            backgroundColor: "white",
            paddingRight:'1em',
            textAlign:'right'

        },
        header: {

            zIndex: '10000'
        }

    }
});
export default extended.css(styles[GLOBALS]);