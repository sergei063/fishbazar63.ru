import React from 'react';
import $ from 'jquery'
import {css} from 'aphrodite/no-important';

import AppStyle from '../css/AppStyle';



class Carousel {
    constructor() {

        this.indexSlider = 0;
        this.timeout = 5000;
        this.count = 3;
    }
    startSlider(timeout) {
        if (this.indexSlider <= this.count) {
            $('#slider').removeClass();
            switch (this.indexSlider) {
                case 0: {
                    $('#slider').addClass(css(AppStyle.slider));
                    $('#slider_text').html($('#slider_text_0').html());
                    break;
                }
                case 1: {
                    $('#slider').addClass(css(AppStyle.slider_1));
                    $('#slider_text').html($('#slider_text_1').html());
                    break;
                }
                case 2: {
                    $('#slider').addClass(css(AppStyle.slider_2));
                    $('#slider_text').html($('#slider_text_2').html());
                    break;
                }
                case 3: {
                    $('#slider').addClass(css(AppStyle.slider_3));
                    $('#slider_text').html($('#slider_text_3').html());
                    break;
                }
                default: {
                    $('#slider').addClass(css(AppStyle.slider));
                    $('#slider_text').html($('#slider_text_0').html());
                    break;
                }
            }
            this.indexSlider++;
            clearTimeout(this.timerId);
            this.timerId = setTimeout(() => this.startSlider(), timeout||this.timeout);

        } else {
            this.indexSlider = 0;
            this.startSlider()
        }

    }

    setIndex(i) {
        if (i>this.count){
            i=0;
        } else if(i<0){
            i=this.count
        }

        this.indexSlider = i;
        clearTimeout(this.timerId);
        this.startSlider(10000);
    }
    prev() {
        this.setIndex(this.indexSlider-2)
    }
    next() {
        clearTimeout(this.timerId);
        this.startSlider(10000);
    }
}
export default Carousel;