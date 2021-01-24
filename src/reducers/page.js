import {
    CANVAS_WIDTH,
    DEVICE_TYPE,
    SET_X,
    SET_Y,
    SET_R,
    SET_TABLE,
    ADD_DOT,
} from "../actions/pageActions";

const  initialState = {
    x: 0,
    y: 0,
    r: 10,
    table: [
    ],
    canvasWidth: 420,
    deviceType: ""
}

export function pageReducer(state  = initialState,action) {
    switch (action.type) {
        case ADD_DOT:
            return {...state, table: [...state.table, action.payload]};
        case SET_TABLE:
            return {...state,table: action.payload};
        case DEVICE_TYPE:
            return{...state,deviceType: action.payload};
        case CANVAS_WIDTH:
            return {...state,canvasWidth: action.payload};
        case SET_X:
            return {...state,x: action.payload};
        case SET_Y:
            return {...state,y: action.payload};
        case SET_R:
            return {...state,r: action.payload};
    }
    return state;
}