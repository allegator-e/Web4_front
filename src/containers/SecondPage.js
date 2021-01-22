import React from "react";
import {Header} from "../components/Header";
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
import {Button} from "primereact/button";
import {Kitten} from "../components/Kitten";


class SecondPage extends React.Component{
    constructor(props){
        super(props);
        this.props.setX(0);
        this.props.setY(0);
        this.props.setR(10);
        this.redirectMainPage = this.redirectMainPage.bind(this);
    }

    redirectMainPage(e){
        this.props.logout()
    }

    getTable(){
        this.props.getTable();
    }

    componentDidMount() {
        this.getTable()
    }

    render() {
        const {header,style,page,user} = this.props;
        return(
            <div style={style.style.base}>
                {/*{!user.isLogin && <Redirect to={"/~s285605/"}/>}*/}
                <Header
                    group={header.group}
                    firstDeveloper={header.firstDeveloper}
                    secondDeveloper={header.secondDeveloper}
                    variant={header.variant}
                    style={style}/>
                    <Kitten style={style}/>
                    <Form />
                    <Canvas />
                    <Button label={"Logout"} onClick={this.redirectMainPage} style={style.style.logout_button}/>
                    <Table table={page.table} style={style} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        header: store.header,
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

