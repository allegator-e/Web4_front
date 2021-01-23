import React,{Component} from "react";
import {connect} from 'react-redux';
import Header from "../components/Header";
import {Clock} from "../components/Clock";
import Login from "./Login";
import {Cat} from "../components/Cat";
import {Redirect} from "react-router";

class FirstPage extends Component{

    render() {
        const {header,style,page,user} = this.props;
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
        header: store.header,
        user: store.user,
        style: store.style,
        page: store.page
    }
};

export default connect(mapStateToProps)(FirstPage)
