import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

// const
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.elId = props.id;
    this.calbackFn = props.calbackFn;
    this.state = {
      counter: props.counter || 1,
      packaging: props.packaging,
    };
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClickPlus() {
    this.setState(
      {
        counter: this.state.counter >= 0 ? this.state.counter + 1 : 0,
      },
      function () {
        if (this.calbackFn) {
          this.calbackFn.apply();
        }
      },
    );
  }

  handleClickMinus() {
    this.setState(
      {
        counter: this.state.counter >= 1 ? this.state.counter - 1 : 0,
      },
      function () {
        if (this.calbackFn) {
          this.calbackFn.apply();
        }
      },
    );
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <input type="hidden" id={this.elId} value={this.state.counter} />
        <button onClick={this.handleClickMinus} className={css(Style.btn)}>
          -
        </button>
        &nbsp;&nbsp;&nbsp;
        {this.state.counter}
        &nbsp;
        {this.state.packaging}
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.handleClickPlus} className={css(Style.btn)}>
          +
        </button>
      </div>
    );
  }
}

const Style = StyleSheet.create({
  btn: {
    border: 'solid 1px rgba(31, 35, 44, 0.4)',
    backgroundColor: 'transparent',
    width: '32px',
    height: '32px',
    borderRadius: '30px',
    color: 'rgba(31, 35, 44, 0.4)',
    ':hover': {
      border: ' solid 1px #f04f56',
      color: '#f04f56',
    },
  },
});
export default Counter;
