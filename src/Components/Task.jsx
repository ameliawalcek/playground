import React, { useContext } from 'react'
import { TaskContext } from '../App'

export const Task = ({ task }) => {
    const { tasks, setTasks } = useContext(TaskContext)

    const handleDelete = () => {
        const newTasks = tasks.filter(t => t.id !== task.id)
        setTasks(newTasks)
    }

    const handleEdit = () => {
        const update = prompt('Edit your task...')
        const newTasks = tasks.map(t => {
            return t.id === task.id
                ? { ...t, task: update }
                : t
        })
        setTasks(newTasks)
    }

    return (
        <div>
            <div key={Math.random()}>{task.task}
                <button onClick={handleDelete}>X</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}
