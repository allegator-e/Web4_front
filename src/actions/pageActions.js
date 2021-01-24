import axios from 'axios';

export const CANVAS_WIDTH = 'CANVAS_WIDTH';
export const DEVICE_TYPE = 'DEVICE_TYPE';
export const SET_TABLE = 'SET_TABLE';
export const SET_X = 'SET_X';
export const SET_Y = 'SET_Y';
export const SET_R = 'SET_R';
export const ADD_DOT = "ADD_DOT";


export function getTable() {
    return dispatch => {
        let header = localStorage.getItem('loginIn');
        axios({
            url: 'http://localhost:15000/Web4_Back-end_war/',
            method: 'get',
            headers: { login: header,}
        }).then(data =>{
            dispatch({
                type: SET_TABLE,
                payload: data.data
            })
        }).catch(data => console.log(data));
    }

}

export function sendPoint(butch){
    return dispatch => {
        let header = localStorage.getItem("loginIn");
        axios({
            url: 'http://localhost:15000/Web4_Back-end_war/points',
            data: butch,
            method: 'post',
            headers: {
                login: header,
            },
        })
            .then(data => {
                console.log(data);
                dispatch({
                    type: ADD_DOT,
                    payload: data.data,
                })
            })
            .catch(data => console.log(data));
        dispatch({
            type: SET_X,
            payload: 0,
        });
        dispatch({
            type: SET_Y,
            payload: 0,
        });
        dispatch({
            type: SET_R,
            payload: 10,
        });
    }
}

export function setWidth(width) {
    console.log("Canvas width: " + width);
    return{
        type: CANVAS_WIDTH,
        payload: width
    }
}

export function setDevice(device) {
    return{
        type: DEVICE_TYPE,
        payload: device
    }
}

export function setR(R) {
    return{
        type: SET_R,
        payload: R
    }
}

export function setX(X) {
    return{
        type: SET_X,
        payload: X
    }
}

export function setY(Y) {
    return{
        type: SET_Y,
        payload: Y
    }
}