import React, {Fragment} from 'react';



class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.isChecked || false,
            text: props.text || "",
        };
    }
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }
    getChecked = () => {
        return this.state.isChecked
    }
    render() {
        return (
            <label>
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.toggleChange}
                />
                {this.state.text}
            </label>
        );
    }
}

export default Checkbox