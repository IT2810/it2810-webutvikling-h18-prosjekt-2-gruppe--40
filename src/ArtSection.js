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
        } else if (artType === 'text') {
            this.setState({
                textState: newState,
            });
            this.fetchText('./art/' + this.props.category + '/text/texts.json', newState)
        } else if (artType === 'sound') {
            this.setState({
                soundState: newState,
            });
        }
    }

    fetchText(url, newState){
        fetch(url).then(res => res.json()).then(
            (result) => {
                console.log(result.text1);
                switch(newState){
                    case 'option1':
                        this.setState({
                            textState: result.text1,
                        });
                        break;
                    case 'option2':
                        this.setState({
                            textState: result.text2,
                        });
                        break;
                    case 'option3':
                        this.setState({
                            textState: result.text3,
                        });
                        break;
                    case 'option4':
                        this.setState({
                            textState: result.text4,
                        });
                        break;
                    default:
                        break;
                }
                this.setState({
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