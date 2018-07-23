import React from 'react';
import {StyleSheet, css} from "aphrodite/no-important";
import ProductionStyle from "../../css/ProductionStyle";
import AppStyle from "../../css/AppStyle";
import $ from "jquery";
import Katalog from "../../Katalog";

//const
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.elId = props.id;
        this.calbackFn = props.calbackFn;
        this.state = {
            counter: props.counter ||1,
            packaging:props.packaging
        };
        this.handleClickPlus = this.handleClickPlus.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }
    handleClickPlus() {
        this.setState({
            counter: this.state.counter >= 1 ? this.state.counter + 1 : 1
        });
    }
    handleClickMinus() {
        this.setState({
            counter: this.state.counter >= 2 ? this.state.counter - 1 : 1
        });

    }
    componentDidUpdate(){
        if (this.calbackFn) {
            this.calbackFn.apply(this)
        }
    }
    render() {
        return (

            <div>
                <input type='hidden' id={this.elId} value={this.state.counter}/>
                <button onClick={this.handleClickMinus} className={css(Style.btn)}>-</button>
                &nbsp;&nbsp;&nbsp;{this.state.counter}&nbsp;{this.state.packaging}&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleClickPlus} className={css(Style.btn)}>+</button>
            </div>
        );
    }

}


const Style = StyleSheet.create({

    btn: {
        border: 'solid 1px rgba(31, 35, 44, 0.4)',
        backgroundColor:'transparent',
        width: '32px',
        height: '32px',
        borderRadius: '30px',
        color: 'rgba(31, 35, 44, 0.4)',
        ':hover': {
            border:' solid 1px #f04f56',
            color: '#f04f56',

        }
    }
});
export default Counter;