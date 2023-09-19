import './styles.css'

import Display from '../Display';
import Button from '../Button';

function Calculator() {
  return (
    <div className='calculator'>
      <Display value={100} />
      <Button label="AC" triple={1} />
      <Button label="/" operation={1} />
      <Button label="7"/>
      <Button label="8"/>
      <Button label="9"/>
      <Button label="*" operation={1} />
      <Button label="4"/>
      <Button label="5"/>
      <Button label="6"/>
      <Button label="-" operation={1} />
      <Button label="1"/>
      <Button label="2"/>
      <Button label="3"/>
      <Button label="+" operation={1} />
      <Button label="0" double={1} />
      <Button label="."/>
      <Button label="=" operation={1} />
    </div>
  )
}

export default Calculator;