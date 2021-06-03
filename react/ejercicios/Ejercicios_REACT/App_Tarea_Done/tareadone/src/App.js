
import React from 'react';
import './App.css';
import { CreateTaskView } from './components/CreateTaskView';


class App extends React.Component {
  

  
  render () {
    
    return (
      <div className="App">
        <form 
        // onSubmit={}
        >
          <label htmlFor="task">Create Task: </label>
          <input
          id="task" 
          type="text"
          // onChange={}
          // value={}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
