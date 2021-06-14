import React from 'react';
import './App.css';
// import Task from './components/Task'
import { Form } from './components/Form'

class App extends React.Component  {

  state = {
    
    title : " ",
    done : false,
    count: 1,
    tasks : []
}  
//   //aqui sabe el usario que valor esta ingreesando 
  handleChange = (event) => { //con una funcion flecha para que el this se mantenga 
    const { value } = event.target 
    
    this.setState({
        title : value
        })
        console.log(this.state)
}

  createTask = (event) => { //este evento crea la tarea
    event.preventDefault()
    const { title, done, count } = this.state

    const task = {
      id : count + 1,
      title,
      done : false
    }

    let enlistedTasks = [...this.state.tasks, task]

    this.setState({
      tasks : enlistedTasks,
      count: count + 1,
      title: ''
    })
}

completedTask = id => e => {
    const {tasks} = this.state
    //console.log('esto es tasks: ', tasks)
    const taskcompleted = tasks.map(el => {
      if (id === el.id) {
        return {...el, done : el.done = true}
      }
      return el
    })
    
    this.setState({
      tasks: taskcompleted
    })
}

  render() {

    const { title, tasks } = this.state

  return (
    <div className="App"> 
      <Form 
      // title={title}  
      handleChange={this.handleChange}
      title={title}
      createTask={this.createTask}
      tasks={tasks}
      completedTask={this.completedTask}
       /> 
      {/* <Task /> */}

  </div> 
  )
}
}

export default App;
