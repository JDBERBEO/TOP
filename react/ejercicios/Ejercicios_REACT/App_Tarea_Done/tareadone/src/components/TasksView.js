import React from 'react'
import { Task } from './Task'
//import styles from './styles.css'



export const TasksView = ({tasks, completeTask}) => {
    console.log('esto es tasks: ', tasks)
    return (
        <div>
            <h1>Tasks Enlisted</h1>
            {tasks.map(el => (
                <Task key={el.id} 
                title={el.title} 
                done={el.done} 
                completeTask={completeTask(el.id)}/>  
            ))
            }
        </div>
    )
}
