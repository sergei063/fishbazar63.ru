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
        //this.props.value = event.target.value;
    }
    componentDidUpdate(previousProps, previousState) {
        /*this.state={
            value: this.props.value ||'',
            text: this.props.text ||'',
            options:this.props.options ||[]
        };
*/

    }

    render() {

        return (
                <label>
                    {this.props.text}
                    <select onChange={this.handleChange}>
                        {

                            this.props.options.map((o, index) => (
                                <option key={index} selected={(this.props.value === o.text)}  value={o.value}>{o.text}</option>)
                            )
                        }
                    </select>
                </label>
        );
    }
}
export default  InputSelect