import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: ["t1", "t2", "t3"],
      name: "",
      terms: false
    }
  }
  render() {
    return (
      <div>
        <h1>Hola</h1>
        <ul>
          {
            this.state.tasks.map((task, index) =>
              <li>{task}<button id={index} onClick={this.updateTask.bind(this)}>update</button><button id={index} onClick={this.deleteTask.bind(this)}>Delete</button></li>
            )
          }
        </ul>
        <button onClick={this.addTask.bind(this)}>Add Task</button>
        <br/>
        <input></input>
      </div>
  );
  }
  addTask() {
    this.setState({
      tasks: this.state.tasks.concat("t"+this.state.tasks.length.toString())
    })
  }
 
  deleteTask(event){
    const {id} = event.target;
    const tasks = this.state.tasks;
    this.setState({
      tasks: tasks.filter((task, i) =>
        id !==i  
      )
    })
  }

  updateTask(event){

    const {id} = event.target;
/*
    this.setState({
      tasks: this.state.tasks.map((task, i) =>
        id === i ? "updated": task
      )
    });
    */
    const tasks = this.state.tasks;
    this.setState({
      tasks: [
        ...tasks.slice(0, id),
        "updated",
        ...tasks.slice(id+tasks.length)
      ]
    })
  }
}

export default App;
