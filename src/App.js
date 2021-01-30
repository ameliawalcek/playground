import React, { useState, useRef, useEffect, useContext, createContext } from 'react'
import { Task } from './Components/Task'

export const TaskContext = createContext()

function App() {

  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  const [id, setId] = useState(0)
  const inputRef = useRef()

  const handleChange = ({ target }) => setInput(target.value)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleClick = () => {
    setTasks([{ id, task: input }, ...tasks])
    setId(previd => previd + 1)
    setInput('')
  }

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <input type='text' ref={inputRef} onChange={handleChange} value={input} placeholder='to do...' />
        <button onClick={handleClick}>New Task</button>

        <div>Tasks</div>
        {tasks.map(task => <Task task={task} key={task.id} />)}
      </div>
    </TaskContext.Provider>
  )
}

export default App
