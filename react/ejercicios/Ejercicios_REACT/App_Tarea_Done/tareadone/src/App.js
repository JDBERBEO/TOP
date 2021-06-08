
import React from 'react';
import './App.css';
import { TasksView } from './components/TasksView';
import styled from 'styled-components'


const DivStyle = styled.div`

  background-color: red;
`
const FormStyle = styled.form`

background-color: red;
`

class App extends React.Component {
  
  state = {
    title : '',
    done: false,
    count: 1,
    tasks : []
  }

  handleOnChange = e => {
    const {value} = e.target
    this.setState({title : value})
  }
  

  //console.log(this.state.title)
  CreateTask = e => {
    e.preventDefault()
    
    const { title, done, count } = this.state

    const task = {
      id : count + 1,
      title,
      done : false
    }
    
    //console.log('task', task)
    let newTasks = [...this.state.tasks, task]
  
  
    this.setState({
      tasks: newTasks,
      count: count + 1,
      title: ''
    })
    
    //console.log(this.state.tasks)
  }
  
  completeTask = id => e => {
    console.log('tasks desde completeTask: ', this.state.tasks)
    const {tasks} = this.state

    const taskCompleted = tasks.map( el => {

      if(id === el.id) {
        return {...el, done : el.done = true}
      }
      return el
    })

    console.log('taskcompelte: ', taskCompleted)

    this.setState({
      tasks : taskCompleted
    })


  }

  render () {
    
    const {title, done, tasks} = this.state
    return (
      <div className="App">
        <FormStyle 
        onSubmit={this.CreateTask}
        className="App-createForm"
        >
          <label htmlFor="task">Create Task: </label>
          <input
          id="task" 
          type="text"
          onChange={this.handleOnChange}
          value={title}
          ></input>
          <button>Create Task</button>
        </FormStyle>
        <DivStyle />
    
        <TasksView 
          tasks={tasks}
          completeTask={this.completeTask}
        />
      </div>
    );
  }
}

export default App;
