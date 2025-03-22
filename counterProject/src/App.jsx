import { useState } from "react"

function App() {
      let [counter ,setCOunter] = useState(5)
      const AddValue = () => {
        setCOunter(counter + 1)
      }
      const MinusValue = () => {
        setCOunter(counter - 1)
      }
      if(counter < 0){
        setCOunter(0)
      }
      
  
  return (
    <>
      <h1>Counter {counter}</h1>
      <h2>{counter}</h2>
      <button onClick={AddValue}>Increment {counter}</button>
      <button onClick={MinusValue}>Decrement {counter}</button>
    </>
  )
}

export default App
