import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Sound extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        soundState: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="soundDiv">
                <audio src={ require("./art/" + this.props.category + "/music/" + this.props.soundState + ".mp3")} controls/>
            </div>
        )
    }
}

export default Sound;