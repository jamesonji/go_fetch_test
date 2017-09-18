import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTask} from '../actions';

import '../assets/css/App.css';

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTask}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  }
}

class TasksList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addingTask: false,
      newTask:'',
    };
    
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this);
  }

  addTask(){
    let newTask = this.stata.newTask;
    this.props.addTask(newTask);
  }
  
  render() {  
    let tasksList = this.props.tasks.map(function(task){
      return (
        <li key={`task_${task.id}`}>
          {task.content}
        </li>
      )
    })
    
    return (
      <div>
        <div className="tasks_container">
          <ul>
            {tasksList}
          </ul>
        
          <div>
            {this.state.addingTask && <input type='text' onChange={(e)=> this.handleNewTaskInput(e)} value={this.state.newTask}/>}
            {this.state.addingTask? 
              <button onClick={()=>this.saveTask()}>save</button>
              :
              <button onClick={()=>this.addTask()}>new</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

const TaksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);
export default TaksListContainer;

