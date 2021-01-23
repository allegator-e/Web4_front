import React from 'react'
import {Button} from "primereact/button";
import {logout} from "../actions/userActions";
import {connect} from 'react-redux';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.redirectMainPage = this.redirectMainPage.bind(this);
    }

    redirectMainPage(e){
        this.props.logOut();
    }

    render() {
        const {header, user, style} = this.props;
        return(
            <div className="hat" style={style.style.header}>
                {header.variant}
                <br/>{header.firstDeveloper}, {header.secondDeveloper}
                <br/>{header.group}<br/>
                {user.isLogin ? <Button label={"Logout"} onClick={this.redirectMainPage} style={style.style.logout_button}/> : null}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        header: store.header,
        user: store.user,
        style: store.style,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logOut: () => dispatch(logout()),
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Header)