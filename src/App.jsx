import Calculator from "./components/Calculator";

import { CalculatorProvider } from './contexts/CalculatorProvider'

function App() {

  return (
    <>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </>
  )
}

export default App
