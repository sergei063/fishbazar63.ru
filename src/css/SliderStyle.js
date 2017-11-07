import {StyleSheet, css} from 'aphrodite/no-important';

const sliderBase = {
    position: 'relative',
    minWidth: '100%',
    height: '45vh',
    minHeight: '430px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'table',
    textShadow: 'black 0.1em 0.1em 0.2em',
    transition: 'background 2s ease 0s',
    width: '100%'
}

const SliderStyle = StyleSheet.create({
    slider: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/fishmarket.jpg') + "),url(" + require('../img/fons/boy.jpg') + "),url(" + require('../img/fons/mintai.jpg') + "), url(" + require('../img/fons/krevetki.jpg') + "), url(" + require('../img/fons/abstract.jpg') + ")"
    },
    slider_line: {
        width: '675px', margin: 'auto', borderTop: '2px solid #fff'
    },
    slider_1: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/boy.jpg') + ")",
    },
    slider_2: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/mintai.jpg') + ")",

    },
    slider_3: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/krevetki.jpg') + ")",
    },
    slider_4: {
        ...sliderBase,
        backgroundImage: "url(" + require('../img/fons/krevetki2.jpg') + ")",
    }

});

export default SliderStyle;