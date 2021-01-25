import React from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {connect} from 'react-redux';
import {Button} from "primereact/button";
import {Password} from 'primereact/password';
import {InputText} from "primereact/inputtext";
import {login, registration, setAnswer, setLogin} from "../actions/userActions";
import '../button.css'

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.props.setAnswer("");
        this.justLogin = this.justLogin.bind(this);
        this.justRegister = this.justRegister.bind(this);
    }

    justLogin(e){
        this.props.setAnswer("");
        let login = document.getElementById("login").value.trim();
        let password = document.getElementById("password").value.trim();
        if (login === null || login === ""){
            this.props.setAnswer("Пожалуйста, введите логин.")
        }else if(password === null || password === ""){
            this.props.setAnswer("Пожалуйста, введите пароль.")
        }else{
            let data = {
                login: login,
                password: password
            };
            this.props.login(data);
        }
    }

    justRegister(e){
        this.props.setAnswer("");
        let login = document.getElementById("login").value.trim();
        let password = document.getElementById("password").value.trim();
        if (login === null || login === ""){
            this.props.setAnswer("Пожалуйста, введите логин.")
        }else if(password === null || password === ""){
            this.props.setAnswer("Пожалуйста, введите пароль.")
        }else{
            let data = {
                login: login,
                password: password
            };
            this.props.registration(data);
        }
    }

    render() {
        const {style, user} = this.props;
        return(
            <div style={style.style.loginField.align}>
                <InputText placeholder=" Login" maxLength={20} id={"login"} style={style.style.loginField.textField}/>
                <Password placeholder=" Password" maxLength={20} id={"password"} style={style.style.loginField.textField}/>
                <div className={"userAnswer"} style={style.style.loginField.userAnswer}>
                    {user.userAnswer === "" ? <br/> : user.userAnswer}
                </div>
                <div>
                     <Button id={'login'} label="Login" style={style.style.loginField.button}  onClick={this.justLogin}/>
                     <Button id={'register'} label="Register" style={style.style.loginField.button} onClick={this.justRegister}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store =>{
    return{
        user: store.user,
        style: store.style
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        setLogin: info => dispatch(setLogin(info)),
        setAnswer: userAnswer => dispatch(setAnswer(userAnswer)),
        registration: butch => dispatch(registration(butch)),
        login: butch => dispatch(login(butch)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
