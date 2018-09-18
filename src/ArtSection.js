import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButtons from "./RadioButtons";
import Image from "./Image";
import Text from "./Text";
import Sound from "./Sound";



class ArtSection extends Component {

    constructor(props) {
        super(props);
        this.handleOptionChange= this.handleOptionChange.bind(this);
        this.state = {
            imageState: 'option1',
            textState: 'option1',
            soundState: 'option1',
            svgGraphics: "",
        };
    }

    static propTypes = {
        category: PropTypes.string.isRequired,
    };

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

    render() {
        return (
            <div>
                <RadioButtons artType="image" changeOption={this.handleOptionChange.bind(this)}>Image</RadioButtons>
                <RadioButtons artType="text" changeOption={this.handleOptionChange.bind(this)}>Text</RadioButtons>
                <RadioButtons artType="sound" changeOption={this.handleOptionChange.bind(this)}>Sound</RadioButtons>
                <Image category={this.props.category} imageState={this.state.imageState}/>
                <Text category={this.props.category} textState={this.state.textState}/>
                <Sound category={this.props.category} soundState={this.state.soundState}/>
            </div>
            )
    }
}

export default ArtSection;