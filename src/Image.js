import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** This Component contains the SVG Image */
class Image extends Component {

    static propTypes = {
        /** svgGraphics contains the content of the selected SVG file */
        svgGraphics: PropTypes.string.isRequired,
    };

    /** Returns the SVG code of the selected SVG file */
    render() {
        return (
                <div className="imageDiv" dangerouslySetInnerHTML={{__html: this.props.svgGraphics}} />

        )
    }
}

export default Image;