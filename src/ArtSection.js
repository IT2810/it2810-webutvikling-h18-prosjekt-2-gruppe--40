import React, { Component } from 'react';
import PropTypes from 'prop-types';
import apple from './art/animals/graphics/image1.svg'

class ArtSection extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
    };

    render() {
        const {
            props: {
                label,
            },
        } = this;

        return (
            <img src={apple}/>

            )
    }
}

export default ArtSection;