import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fruit_image1 from './art/fruits/graphics/image1.svg'

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


        let imgpath = "./art/" + label + "/graphics/image2.svg";

        return (
            <img src={fruit_image1}/>
            )
    }
}

export default ArtSection;