import React from 'react'

export const EnlistedTasksView = ({tasks, completedTask}) => {
    return (
        <div>
            {tasks.map(({id, title, done}) => (
                <div key={id}>
                    <h1>{title}</h1>
                    <p>{done.toString()}</p>
                    <button 
                    onClick={completedTask(id)}
                    >completed Task</button>
                </div>          
            ))}
        </div>
    )
}
