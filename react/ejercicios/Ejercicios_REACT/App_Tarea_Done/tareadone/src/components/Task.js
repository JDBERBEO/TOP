import React from 'react'

export const Task = ({title, done, completeTask}) => {

    //console.log('estos es done: ', done)
    return (
        <div>
            <h2>{title}</h2>
            <p>{done.toString()}</p>
            <button 
            onClick={completeTask}
            >Task completed</button>
        </div>
    )
}
