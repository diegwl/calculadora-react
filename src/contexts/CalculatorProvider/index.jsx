import { CalculatorContext } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export function CalculatorProvider({children}) {
    const [calculatorState, calculatorDispatch] = useReducer(reducer, data);

    return (
        <CalculatorContext.Provider value={{calculatorState, calculatorDispatch}}>
            {children}
        </CalculatorContext.Provider>
    )
}
