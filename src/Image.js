import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Image extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        imageState: PropTypes.string.isRequired,
    };

    render() {
        return (
                <div className="imageDiv" dangerouslySetInnerHTML={{__html: this.props.svgGraphics}} />

        )
    }
}

export default Image;