import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** This Component contains the selected Sound in HTML5 format */
class Sound extends Component {

    static propTypes = {
        /** String for the given category (animals, drake or fruit). */
        category: PropTypes.string.isRequired,
        /** The current selected option for Sound */
        soundState: PropTypes.string.isRequired,
    };

    /** Returns the HTML5 Sound element */
    render() {
        return (
            <div className="soundDiv">
                <audio src={ require("./art/" + this.props.category + "/music/" + this.props.soundState + ".mp3")} controls/>
            </div>
        )
    }
}

export default Sound;