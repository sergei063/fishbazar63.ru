import React from 'react';

class InputSelect extends React.Component {
  constructor(props) {
    super(props);

    (this.ref = React.createRef()),
    (this.state = {
      value: null,
      text: props.text || '',
      options: props.options || [],
    });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // this.props.value = event.target.value;
  }

  getSelectRef() {
    return this.ref;
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {

        console.log(nextProps)
        console.log(prevState)
        if (!_.isEqual(nextProps,prevState)){

            let r = {
                value: nextProps.value || '',
                text: nextProps.text || '',
                options: nextProps.options || []
            }
            console.log(r)
            return r
        }

        return null;

    } */

  render() {
    // selected={(this.props.value === o.text)}
    return (
      <label>
        {this.props.text}
        <select
          ref={this.ref}
          value={this.state.value || this.props.value}
          onChange={this.handleChange}
        >
          {this.props.options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
export default InputSelect;
