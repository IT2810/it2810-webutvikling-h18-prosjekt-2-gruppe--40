import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Text extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        textState: PropTypes.string.isRequired,
    };

    render() {
        return (
            <p>{this.props.category} text {this.props.textState} goes here</p>

        )
    }
}

export default Text;