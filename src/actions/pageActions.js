import axios from 'axios';

export const CANVAS_WIDTH = 'CANVAS_WIDTH';
export const CANVAS_HEIGHT = 'CANVAS_HEIGHT';
export const DEVICE_TYPE = 'DEVICE_TYPE';
export const CANVAS_COF = 'CANVAS_COF';
export const PAGE_WIDTH = 'PAGE_WIDTH';
export const SET_TABLE = 'SET_TABLE';
export const SET_X = 'SET_X';
export const MARGIN_LEFT = 'MARGIN_LEFT';
export const MARGIN_TOP = 'MARGIN_TOP';
export const SET_Y = 'SET_Y';
export const SET_R = 'SET_R';
export const SET_MESSAGE_X = 'SET_MESSAGE_X';
export const SET_MESSAGE_Y = 'SET_MESSAGE_Y';
export const SET_MESSAGE_R = 'SET_MESSAGE_R';
export const ADD_DOT = "ADD_DOT";
export const CLOCK_SIZE = 'CLOCK_SIZE';


export function setMarginLeft(margin) {
    return{
        type: MARGIN_LEFT,
        payload: margin
    }
}

export function setMarginTop(margin) {
    return{
        type: MARGIN_TOP,
        payload: margin
    }
}

export function setPageWidth(width) {
    return {
        type: PAGE_WIDTH,
        payload: width
    }
}

export function setClock(width) {
    return {
        type: CLOCK_SIZE,
        payload: width
    }

}

export function getTable() {
    return dispatch => {
        let header = localStorage.getItem('loginIn');
        axios({
            url: 'http://localhost:15000/Web4_Back-end_war/main',
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

export function setCof(cof) {
    return{
        type: CANVAS_COF,
        payload: cof
    }

}

export function sendPoint(butch){
    return dispatch => {
        let header = localStorage.getItem("loginIn");
        axios({
            url: 'http://localhost:15000/Web4_Back-end_war/main/points',
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

export function setHeight(height) {
    return{
        type: CANVAS_HEIGHT,
        payload: height
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