import './styles.css'
import { useCalculatorContext } from '../../hooks/useCalculatorContext';

function Display() {

  const calculatorContext = useCalculatorContext();

  const { calculatorState } = calculatorContext;

  return (
    <div className='display'>
      {calculatorState.displayValue}
    </div>
  )
}

export default Display;