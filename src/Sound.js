import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Sound extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        soundState: PropTypes.string.isRequired,
    };

    render() {
        return (
            <p>{this.props.category} sound {this.props.soundState} goes here</p>

        )
    }
}

export default Sound;