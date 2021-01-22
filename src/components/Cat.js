import React from "react";
import cat from './resources/kitten.gif'

export class Cat extends React.Component{
    render() {
        const {style} = this.props;
        return(
            <img src={cat} id="kitten" alt="cat" style={style.style.kitten}/>
        )
    }
}