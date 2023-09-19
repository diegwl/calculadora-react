import * as types from './types';

export const addDigit = (dispatch, label) => {
    dispatch({ types: types.ADD_DIGIT, label: label });
}

export const setOperation = (dispatch, label) => {
    dispatch({ types: types.SET_OPERATION, label: label });
}

export const clearMemory = (dispatch) => {
    dispatch({ types: types.CLEAR_MEMORY });
}
