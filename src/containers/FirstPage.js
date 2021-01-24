import React,{Component} from "react";
import {connect} from 'react-redux';
import Header from "../components/Header";
import {Clock} from "../components/Clock";
import Login from "./Login";
import {Cat} from "../components/Cat";
import {Redirect} from "react-router";

class FirstPage extends Component{

    render() {
        const {style,user} = this.props;
        return(
            <div className="firstPage">
                {user.isLogin && <Redirect to={"/~s285605/main"}/>}
                <Header/>
                <Clock style={style}/>
                <Login/>
                <Cat style={style}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        style: store.style,
    }
};

export default connect(mapStateToProps)(FirstPage)
