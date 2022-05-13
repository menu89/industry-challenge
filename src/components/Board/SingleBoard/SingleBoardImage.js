import React from 'react';
import { Component } from "react";
import { Redirect } from 'react-router-dom';
const imageAddress = 'http://localhost:8080/shutterstock'

class SingleBoardImage extends Component {
    state = {
        redirect:false
    }

    handleClick = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        const {id, category, mainImage, mood} = this.props.oneBoard

        return (
            <>
            { this.state.redirect ? <Redirect to="/board" /> : null}
            <div className='bi__wrapper'>
                <img className='bi__image' src={`${imageAddress}${mainImage}`} alt="description" onClick={this.handleClick} />
                <h3 className='bi__text'>{mood}</h3>
            </div>
            </>
        )
    }
    
}

export default SingleBoardImage;