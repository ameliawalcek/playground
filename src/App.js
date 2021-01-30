import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevcount => prevcount + 1)
  const decrement = () => setCount(prevcount => prevcount - 1)

  return (
    <div className="App">
      Counter
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App