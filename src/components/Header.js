import React from 'react'
import Canvas from "../containers/Canvas";
import {Button} from "primereact/button";

export class Header extends React.Component{
    render() {
        const {group,firstDeveloper,secondDeveloper,variant,style, logout} = this.props;
        return(
            <div className="hat" style={style.style.header}>
                {variant}
                <br/>{firstDeveloper}, {secondDeveloper}
                <br/>{group}<br/>
                {logout ? <Button label={"Logout"} onClick={this.redirectMainPage} style={style.style.logout_button}/> : null}
            </div>
        )
    }
}