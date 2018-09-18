import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Image extends Component {

    static propTypes = {
        category: PropTypes.string.isRequired,
        imageState: PropTypes.string.isRequired,
    };

    render() {
        return (
            <p>{this.props.category} image {this.props.imageState} goes here</p>

        )
    }
}

export default Image;