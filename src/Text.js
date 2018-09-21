import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** This Component contains the JSON Text */
class Text extends Component {

    static propTypes = {
        /** This state contains the Text from the selected option */
        textState: PropTypes.string.isRequired,
    };

    /** Returns the Text */
    render() {
        return (
            <div className="textDiv">
                <p className="text">{this.props.textState}</p>
            </div>


        )
    }
}

export default Text;