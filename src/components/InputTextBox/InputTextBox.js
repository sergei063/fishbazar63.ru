import React from 'react';
import {StyleSheet, css} from "aphrodite/no-important";
import ShoppingCartStyle from "../../css/ShoppingCartStyle";
import {MetaSerifProBookFont} from "../../css/Fonts";

class InputTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    validate(){
        if (this.input.current.value.trim()===''){
            this.input.current.required='required';
            return false;
        }
        this.input.current.required='';
        return true;
    }

    getValue(){
        return this.input.current.value;

    }
    render(){
        return (

            <div className={css(Style.cnt)}>
                <input ref={this.input} id={this.props.id} onKeyUp={this.validate.bind(this)} placeholder={this.props.placeholder} className={css(Style.input)}/>
                <label className={css(Style.error)} htmlFor={this.props.id}></label>
            </div>
        );
    }
}


const Style = StyleSheet.create({
    cnt:{
        width: '100%', height: '100%',
        position:'relative',
    },

    input: {
        borderRadius: '100px',
        backgroundColor: 'unset',
        fontFamily: [MetaSerifProBookFont, "sans-serif"],

        border: 'solid 1px rgba(31, 35, 44, 0.4)',
        width: '100%',
        height: '100%',
        //paddingLeft: '20px',
        textIndent:'20px',
        ':focus': {
            border: 'solid 1px rgba(31, 35, 44, 0.8)',
            '::placeholder': {
            }
        },
        ':required':{
            border:'solid 1px #fe545b'
        },
        ':required ~ label': {
            display:'block',
            ':after': {
                content: "'*Обязательное поле'",
            },
            color: 'red'
        },
        /*'label': {
            ':after': {
                display: 'block',
                content: '*Обязательное поле1',
                color: 'blue'
            }
        }*/

    },

    error:{
        display:'none',
        position:'absolute',
        top:'8px',
        fontFamily: [MetaSerifProBookFont, "sans-serif"],
        "fontSize": "12px",
        "fontWeight": "normal",
        "fontStyle": "normal",
        "fontStretch": "normal",
        "lineHeight": "normal",
        "letterSpacing": "0.4px",
        "textAlign": "left",
        "color": "#fe545b",
        marginTop:'-24px'
        //marginBottom:'12px'
    },




});
export default InputTextBox;