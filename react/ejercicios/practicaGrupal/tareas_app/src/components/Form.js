import React from 'react'
import { EnlistedTasksView } from './EnlistedTasksView'

export const Form = ({title, handleChange, createTask, tasks, completedTask}) => {
    
    return (
        <div>
            <form 
            onSubmit={createTask}
            >
            <label htmlFor="createTask">
                Create Task                
            </label>
            <input id="createTask"
            value={title}
            onChange={handleChange}
            ></input>
            <button>Crear tarea</button>
            </form>
            <EnlistedTasksView 
            tasks={tasks}
            completedTask={completedTask}
            />
        </div>
    )
}
