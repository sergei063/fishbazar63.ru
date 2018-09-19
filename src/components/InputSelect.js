import React, {Fragment} from 'react';
import Katalog from "../Katalog";

class InputSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value ||'',
            text: props.text ||'',
            options:props.options ||[]

        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    componentDidUpdate(previousProps, previousState) {
        /*this.state={
            value: this.props.value ||'',
            text: this.props.text ||'',
            options:this.props.options ||[]
        };
*/
        console.log(this.state)
    }

    render() {

        return (
                <label>
                    {this.state.text}
                    <select value={this.state.value} onChange={this.handleChange}>
                        {
                            this.state.options.map((o, index) => (
                                <option key={index} value={o.value}>{o.text}</option>)
                            )
                        }
                    </select>
                </label>
        );
    }
}
export default  InputSelect