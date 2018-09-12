import React from 'react';
import {StyleSheet, css} from "aphrodite/no-important";
import ShoppingCartStyle from "../../css/ShoppingCartStyle";
import {MetaSerifProBookFont} from "../../css/Fonts";
import {connect} from "react-redux";
import {addFishToSeafoodShoppingCart, setAllFormsValue} from "../../actions";

class InputTextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text||""
        };
        //this.props.setAllFormsValue(props.id,props.text|| "");

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
        let value = (!this.props.allForms[this.props.id])? this.props.text:this.props.allForms[this.props.id]
        return (

            <div className={css(Style.cnt)}>
                <input ref={this.input}  id={this.props.id} className={css(Style.input)} onKeyUp={this.validate.bind(this)}
                       placeholder={this.props.placeholder}
                       value={value ? value : ""}
                       onChange={e => {this.props.setAllFormsValue(e.target.id,e.target.value)}}
                />
                <label className={css(Style.error)} htmlFor={this.props.id}></label>
            </div>
        );
    }
}

//
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
//export default InputTextBox;

const mapStateToProps = (state) => ({allForms: state.allForms});
const matchDispatchToProps = (dispatch) => ({
    setAllFormsValue:(id,value)=>{
        dispatch(setAllFormsValue(id,value))
    }
});


export default connect(mapStateToProps, matchDispatchToProps,null, { withRef: true })(InputTextBox);