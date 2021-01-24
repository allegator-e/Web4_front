import axios from 'axios';
import {SET_TABLE} from "./pageActions";

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SET_SIGN_IN = "SET_SIGN_IN";
export const SET_USER_ANSWER = 'SET_USER_ANSWER';


export function logout() {
    return dispatch => {
        console.log('fucking fuck');
        dispatch({
            type: LOGOUT,
            payload: false,
        });
        dispatch({
            type: SET_TABLE,
            payload: [],
        });
        localStorage.removeItem("loginIn");
    }
};

export function login(butch) {
    return dispatch => {
        axios({
            url: 'http://localhost:15000/Web4_Back-end_war/login',
            method: 'post',
            data: butch,
        })
            .then(result => {
                console.log(result);
                if (Number(result.status) === 200) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: "Welcome!",
                    });
                    dispatch({
                        type: SET_SIGN_IN,
                        payload: true,
                    });
                    localStorage.setItem("loginIn", butch.login);
                }
            })
            .catch(result => {
                if (result.response.status === 400) {
                    dispatch({
                        type: LOGIN_FAIL,
                        payload: "Неверный логин или пароль",
                    })
                } else {
                    console.log(result);
                    dispatch({
                        type: LOGIN_FAIL,
                        payload: "Проблемы с сервером, попробуйте позже :(",
                    })
                }
            });
    }
}

export function registration(butch) {
    return dispatch => {
        axios({
            method: "post",
            url: 'http://localhost:15000/Web4_Back-end_war/register',
            data: butch,
        })
            .then(result => {
                console.log(result);
                if (Number(result.status) === 200) {
                    dispatch({
                        type: REGISTER,
                        payload: "Регистрация завершена!"
                    })
                }
            })
            .catch(result => {
                if (result.response.status === 400) {
                    dispatch({
                        type: REGISTER,
                        payload: "Введите другой логин для регистрации",
                    });
                } else {
                    console.log(result);
                    dispatch({
                        type: REGISTER,
                        payload: "Проблемы с сервером, попробуйте позже :(",
                    });
                }
            })
        ;
    }
}


export function setAnswer(userAnswer) {
    return{
        type: SET_USER_ANSWER,
        payload: userAnswer
    }
}

export function setLogin(login) {
    return{
        type: SET_SIGN_IN,
        payload: login
    }
}