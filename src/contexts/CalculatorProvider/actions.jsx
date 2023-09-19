import * as types from './types';

export const addDigit = (dispatch) => {
    dispatch({ types: types.ADD_DIGIT });
}

export const setOperation = (dispatch) => {
    dispatch({ types: types.SET_OPERATION });
}

export const clearMemory = (dispatch) => {
    dispatch({ types: types.CLEAR_MEMORY });
}
