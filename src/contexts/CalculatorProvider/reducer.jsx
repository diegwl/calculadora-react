import * as types from './types';

export const reducer = (state, action) => {
    switch (action.types) {
        case types.ADD_DIGIT: {
            console.log(action.digit)
            return {...state, digits: state.digits + action.digit}
        }
        case types.SET_OPERATION: {
            return {...state, operation: action.operation}
        }
        case types.CLEAR_MEMORY: {
            return {...state, digits: '0', operation: null}
        }
    }
}