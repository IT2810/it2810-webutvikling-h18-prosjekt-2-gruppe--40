import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** This Component generates the RadioButtons for the given artType */

class RadioButtons extends Component {
    static propTypes = {
        /** String for the given art type (image, text or sound). */
        artType: PropTypes.string.isRequired,
        /** handleOptionChange function from ArtSection Component */
        changeOption: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleChange= this.handleChange.bind(this);
        /** selectedState contains what radiobutton is currently selected. It is initially randomized */
        var initialOption = 'option' + Math.floor(Math.random() * 4 + 1);
        this.props.changeOption(this.props.artType,initialOption);
        this.state = {
            selectedState: initialOption,
        };
    }

    /** This function is called when a radio button is pressed and calls the handleOptionChange function in ArtSection */
    handleChange(changeEvent) {
        this.setState({
            selectedState: changeEvent.target.value
        });
        this.props.changeOption(this.props.artType,changeEvent.target.value);
    }

    /** Returns 4 radio buttons for the given art type */
    render() {
        let idName = this.props.artType + "Form";
        let formName = this.props.artType;
        formName = formName.charAt(0).toUpperCase() + formName.substr(1);
        return (
            <div className={idName}>
                <h3>{formName}</h3>
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