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
                const newValue = parseFloat(currentValue + action.label)
                let newValues = [...state.values]
                newValues[state.current] = newValue
                return {...state, values: newValues, displayValue: currentValue + action.label, clearDisplay: false}
            }

            return {...state, displayValue: currentValue + action.label, clearDisplay: false}
        }
        case types.SET_OPERATION: {
            if (state.current == 0) {
                return {...state, operation: action.label, current: 1, clearDisplay: true}
            } else {
                const equals = (action.label === '=')
                const currentOperation = state.operation
                const values = [...state.values]
                const realOperation = action.label

                switch (currentOperation) {
                    case '+':
                        values[0] = (values[0] + values[1])
                        if (!Number.isInteger(values[0])){
                            values[0] = (values[0]).toFixed(3)
                        }
                        break;
                    case '-':
                        values[0] = (values[0] - values[1])
                        if (!Number.isInteger(values[0])){
                            values[0] = (values[0]).toFixed(3)
                        }
                        break;
                    case '*':
                        values[0] = (values[0] * values[1])
                        if (!Number.isInteger(values[0])){
                            values[0] = (values[0]).toFixed(3)
                        }
                        break;
                    case '/':
                        values[0] = (values[0] / values[1])
                        if (!Number.isInteger(values[0])){
                            values[0] = (values[0]).toFixed(3)
                        }
                        break;
                    case '=':
                        
                        if (realOperation == '+') {
                            values[0] = (values[0] + values[1])
                            
                        } else if (realOperation == '-') {
                            values[0] = (values[0] - values[1])
                            
                        } else if (realOperation == '*') {
                            values[0] = (values[0] * values[1])
                            
                        } else if (realOperation == '/') {
                            values[0] = (values[0] / values[1])
                            
                        }

                        if (!Number.isInteger(values[0])){
                            values[0] = (values[0]).toFixed(3)
                        }

                        break;
                    default:
                        break;
                }
                values[1] = 0

                return {...state, displayValue: values[0], operation: equals ? null : action.label, current: equals ? 0 : 1, clearDisplay: !equals, values: values}
            }
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