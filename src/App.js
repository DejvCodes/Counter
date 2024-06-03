import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)

  // Snižování o 1
  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  // Zvyšování o 1
  const increaseOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  // Reset
  const resetToZero = () => {
    setValue(0)
  }

  return <div className="counter">
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton decreaseOne={decreaseOne} />  
    <ResetButton resetToZero={resetToZero} />
    <IncreaseButton increaseOne={increaseOne} />
  </div>
}

export default App