import './styles.css'

import Display from '../Display';
import Button from '../Button';

function Calculator() {
  return (
    <div className='calculator'>
      <Display value={100} />
      <Button label="AC" triple={1} click='clear'/>
      <Button label="/" operation={1} click='operation' />
      <Button label="7" click='digit' />
      <Button label="8" click='digit' />
      <Button label="9" click='digit' />
      <Button label="*" operation={1} click='operation' />
      <Button label="4" click='digit' />
      <Button label="5" click='digit' />
      <Button label="6" click='digit' />
      <Button label="-" operation={1} click='operation' />
      <Button label="1" click='digit' />
      <Button label="2" click='digit' />
      <Button label="3" click='digit' />
      <Button label="+" operation={1} click='operation' />
      <Button label="0" double={1} click='digit' />
      <Button label="." click='digit' />
      <Button label="=" operation={1} click='operation' />
    </div>
  )
}

export default Calculator;