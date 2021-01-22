import React from "react";
import cat from './resources/cattt.gif'

export class Kitten extends React.Component{
    render() {
        const {style} = this.props;
        return(
            <img src={cat} id="cattt" alt="cat" style={style.style.cat}/>
        )
    }
}