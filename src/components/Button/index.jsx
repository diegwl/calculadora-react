import './styles.css';
import { useCalculatorContext } from '../../hooks/useCalculatorContext';
import { addDigit, setOperation, clearMemory } from '../../contexts/CalculatorProvider/actions';

function Button({ label, operation, double, triple, click }) {

  const calculatorContext = useCalculatorContext();

  const { calculatorDispatch } = calculatorContext;

  return (
    <button 
    className={`
      button
      ${operation ? 'operation' : ''}
      ${double ? 'double' : ''}
      ${triple ? 'triple' : ''}
    `}
    onClick={e => {
      if (click == 'digit') {
        addDigit(calculatorDispatch, label)
      } else if (click == 'operation') {
        setOperation(calculatorDispatch, label)
      } else if (click == 'clear') {
        clearMemory(calculatorDispatch)
      }
    }}
    >
      { label }
    </button>
  )
}

export default Button;