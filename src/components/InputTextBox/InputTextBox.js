import React from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import {connect} from 'react-redux';
import {MetaSerifProBookFont} from '../../css/Fonts';
import {setAllFormsValue} from '../../actions';
import {_try} from '../lib';

class InputTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || '',
      required: props.required || false,
      setLocalStorage: props.setLocalStorage || false,
    };
    // this.props.setAllFormsValue(props.id,props.text|| "");

    this.input = React.createRef();
  }

  validate() {
    if (!this.state.required) {
      return true;
    }
    if (this.input.current.value.trim() === '') {
      this.input.current.required = 'required';
      return false;
    }
    this.input.current.required = '';
    return true;
  }

  getValue() {
    return this.input.current.value;
  }

  render() {
    const value = !this.props.text
      ? _try(() => this.props.allForms[this.props.id], '123')
      : this.props.text;

    return (
      <div className={css(Style.cnt)}>
        <input
          ref={this.input}
          id={this.props.id}
          className={css(Style.input)}
          onKeyUp={this.validate.bind(this)}
          placeholder={this.props.placeholder}
          defaultValue={value || ''}
          onChange={(e) => {
            if (this.state.setLocalStorage) this.props.setAllFormsValue(e.target.id, e.target.value);
          }}
        />
        <label className={css(Style.error)} htmlFor={this.props.id} />
      </div>
    );
  }
}

//
const Style = StyleSheet.create({
  cnt: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  input: {
    borderRadius: '100px',
    fontSize: '14px',
    backgroundColor: 'unset',
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],

    border: 'solid 1px rgba(31, 35, 44, 0.4)',
    width: '100%',
    height: '100%',
    // paddingLeft: '20px',
    textIndent: '20px',
    ':focus': {
      border: 'solid 1px rgba(31, 35, 44, 0.8)',
      '::placeholder': {},
    },
    ':required': {
      border: 'solid 1px #fe545b',
    },
    ':required ~ label': {
      display: 'block',
      ':after': {
        content: "'*Обязательное поле'",
      },
      color: 'red',
    },
    /* 'label': {
            ':after': {
                display: 'block',
                content: '*Обязательное поле1',
                color: 'blue'
            }
        } */
  },

  error: {
    display: 'none',
    position: 'absolute',
    top: '8px',
    fontFamily: [MetaSerifProBookFont, 'sans-serif'],
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.4px',
    textAlign: 'left',
    color: '#fe545b',
    marginTop: '-24px',
    // marginBottom:'12px'
  },
});
// export default InputTextBox;

const mapStateToProps = state => ({ allForms: state.allForms });
const matchDispatchToProps = dispatch => ({
  setAllFormsValue: (id, value) => {
    dispatch(setAllFormsValue(id, value));
  },
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
  null,
  { withRef: true },
)(InputTextBox);
