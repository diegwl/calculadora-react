import * as types from './types';

export const reducer = (state, action) => {
    switch (action.types) {
        case types.ADD_DIGIT: {
            if (action.label === '.' && state.displayValue.includes('.')) {
                return {...state}
            }

            const clearDisplay = state.displayValue === '0' || state.clearDisplay
            const currentValue = clearDisplay ? '' : state.displayValue

            if (action.label !== '.') {
                const newValue = parseFloat(displayValue)
                let newValues = [...state.values]
                newValues[state.current] = newValue
                return {...state, values: newValues, displayValue: currentValue + action.label, clearDisplay: false}
            }

            return {...state, displayValue: currentValue + action.label, clearDisplay: false}
        }
        case types.SET_OPERATION: {
            return {...state, operation: action.label}
        }
        case types.CLEAR_MEMORY: {
            return {...state, 
                displayValue: '0',
                clearDisplay: false,
                operation: null,
                values: [0, 0],
                current: 0
            }
        }
    }
}