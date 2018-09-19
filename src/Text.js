import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Text extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        textState: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="textDiv">
                <p>{this.props.category} text {this.props.textState} goes here</p>
            </div>


        )
    }
}

export default Text;