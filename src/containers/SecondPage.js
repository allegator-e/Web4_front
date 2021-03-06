import React from "react";
import Header from "../components/Header";
import Canvas from "./Canvas";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {
    getTable,
    setR,
    setX,
    setY
} from "../actions/pageActions";
import {logout} from "../actions/userActions";
import Form from "./Form";
import {Table} from "../components/Table";
import {Kitten} from "../components/Kitten";


class SecondPage extends React.Component{
    constructor(props){
        super(props);
        this.props.setX(0);
        this.props.setY(0);
        this.props.setR(10);
        this.redirectMainPage = this.redirectMainPage.bind(this);
        this.props.getTable();
    }

    redirectMainPage(e){
        this.props.logout()
    }

    render() {
        const {style,page,user} = this.props;
        return(
            <div style={style.style.base}>
                {/*!user.isLogin && <Redirect to={"/~s285605/"}/>*/}
                <Header/>
                    <Kitten style={style}/>
                    <Form />
                    <Canvas />
                    <Table table={page.table} style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.page,
        style: store.style,
        user: store.user,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch(logout()),
        setR: r => dispatch(setR(r)),
        setX: x => dispatch(setX(x)),
        setY: y => dispatch(setY(y)),
        getTable: () => dispatch(getTable()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondPage)

