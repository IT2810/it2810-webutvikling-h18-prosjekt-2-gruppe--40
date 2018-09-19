import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RadioButtons extends Component {

    static propTypes = {
        artType: PropTypes.string.isRequired,
        changeOption: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        var initialOption = 'option' + Math.floor(Math.random() * 4 + 1);
        this.props.changeOption(this.props.artType,initialOption);
        this.state = {
            selectedState: initialOption,
        };
    }

    handleChange(changeEvent) {
        this.setState({
            selectedState: changeEvent.target.value
        });
        this.props.changeOption(this.props.artType,changeEvent.target.value);
    }

    render() {
        let idName = this.props.artType + "Form";

        return (
            <div className={idName}>
                <form onSubmit={this.handleFormSubmit}  >
                    <div className="radio">
                        <label>
                            <input type="radio" value="option1" checked={this.state.selectedState === 'option1'} onChange={this.handleChange} />
                            {this.props.children} 1
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" checked={this.state.selectedState === 'option2'} onChange={this.handleChange}/>
                            {this.props.children} 2
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option3" checked={this.state.selectedState === 'option3'} onChange={this.handleChange}/>
                            {this.props.children} 3
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="option4" checked={this.state.selectedState === 'option4'} onChange={this.handleChange}/>
                            {this.props.children} 4
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default RadioButtons;