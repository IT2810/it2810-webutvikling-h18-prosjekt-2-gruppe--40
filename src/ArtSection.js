import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButtons from "./RadioButtons";
import Image from "./Image";
import Text from "./Text";
import Sound from "./Sound";

/**
 * The ArtSection component contains the Image, the Text and the Sound as well as all of the RadioButtons
 */

class ArtSection extends Component {

    constructor(props) {
        super(props);
        this.handleOptionChange= this.handleOptionChange.bind(this);
        /** svgGraphics contains the content of the selected SVG file,*/
        /** The other states are the selected option for the art type */
        this.state = {
            imageState: 'option1',
            textState: 'option1',
            soundState: 'option1',
            svgGraphics: "",
        };
    }

    static propTypes = {
        /** String for the given category (animals, drake or fruit). */
        category: PropTypes.string.isRequired,
    };

    /** This function is called when an option is changed and changes the art */
    handleOptionChange (artType, newState) {
        if(artType === 'image') {
            this.setState({
                imageState: newState,
            });
            this.fetchSVG('./art/' + this.props.category + '/graphics/' + newState + '.svg');

        } else if (artType === 'text') {
            this.setState({
                textState: newState,
            });
            this.fetchText('./art/' + this.props.category + '/text/' + newState + '.json');

        } else if (artType === 'sound') {
            this.setState({
                soundState: newState,
            });
        }
    }

    /** This function sets the svgGraphics state to the SVG file in the given path */
    fetchSVG(path){
        fetch(path).then(res => res.text())
            .then((svg) => {
                this.setState({
                    svgGraphics: svg,
                    isLoaded: true,
                });
            }, (error) => {
                this.setState({
                    isLoaded: false,
                    error,
                });
                console.log(error);

            })
    }

    /** This function sets the textState to the text in the JSON file in the given path */
    fetchText(path){
        fetch(path).then(res => res.json()).then(
            (result) => {
                this.setState({
                    textState:result.text,
                    isLoaded: true,
                });

            }, (error)=> {
                this.setState({
                    isLoaded: false,
                    error
                })
            }
        )
    }

    /** Returns all of the art and all of the radiobuttons */
    render() {
        return (
            <div className="artSectionDiv">
                <RadioButtons artType="image" changeOption={this.handleOptionChange.bind(this)}>Image</RadioButtons>
                <RadioButtons artType="text" changeOption={this.handleOptionChange.bind(this)}>Text</RadioButtons>
                <RadioButtons artType="sound" changeOption={this.handleOptionChange.bind(this)}>Sound</RadioButtons>
                <Image svgGraphics={this.state.svgGraphics}/>
                <Text textState={this.state.textState}/>
                <Sound category={this.props.category} soundState={this.state.soundState}/>
            </div>
            )
    }
}

export default ArtSection;