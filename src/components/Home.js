import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, addTask, toggleTask} from '../actions';

import '../assets/css/App.css';

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser, addTask, toggleTask}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tasks: state.tasks,
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addingUser: false,
      addingTask: false,
      newUserName:'',
      newTask:'',
      selectedUserId:0,
      selectedUserName: '',
    };
    
    this.addUser = this.addUser.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.selectUser = this.selectUser.bind(this);
    
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    
    this.handleNewUserInput = this.handleNewUserInput.bind(this);
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this);
  }

  addUser(){
    this.setState({
      addingUser: true
    });
  }
  
  saveUser(){
    let users = this.props.users;
    let newUser = {id: users.length, name: this.state.newUserName};
    
    this.props.addUser(newUser);
    
    this.setState({
      addingUser: false,
      newUserName: '',
    })
  }
  
  selectUser(user){
    this.setState({
      selectedUserId: user.id,
      selectedUserName: user.name,
    })
  }
  
  handleNewUserInput(e){
    this.setState({newUserName: e.target.value});
  }
  
  
  addTask(){
    this.setState({
      addingTask: true
    });
  }
  
  saveTask(){
    let newTask = {
      id: Date.now(),
      content: this.state.newTask,
      completed: false,
      userId: this.state.selectedUserId,
      userName: this.state.selectedUserName,
    };

    this.props.addTask(newTask);
    
    this.setState({
      addingTask: false,
      newTask: '',
    })
  }

  toggleTask(taskId){
    this.props.toggleTask(taskId);
  }
  
  handleNewTaskInput(e){
    this.setState({newTask: e.target.value});
  }
  
  render() {  
    let self = this;
    let userList = this.props.users.map(function(user){
      return (
        <div key={`user_${user.id}`} className={"user_name" + (user.id == self.state.selectedUserId? ' selected' : '')}>
          <div onClick={() => self.selectUser(user) }>
            {user.name}
          </div>
        </div>
      )
    });

    let tasksList = this.props.tasks.map(function(task){
      if(task.userId !== self.state.selectedUserId){
        return false;
      }

      return (
        <div key={`task_${task.id}`} className={"user_task" + (task.completed? ' completed' : '')}>
          <div onClick={() => self.toggleTask(task.id) }>
            {task.content}
          </div>
        </div>
      )
    });

    return (
      <div className="home_container">
        <div className="user_container">
          <h4>Users</h4>
            {userList}
        
          <div>
            {this.state.addingUser && <input type='text' onChange={(e)=> this.handleNewUserInput(e)} value={this.state.newUserName}/>}
            {this.state.addingUser? 
              <button onClick={()=>this.saveUser()}>save+</button>
              :
              <button onClick={()=>this.addUser()}>new</button>
            }
          </div>
        </div>
        
        
        <div className='task_container'>
          <h4>Tasks</h4>
            {tasksList}
          
          <div>
            {this.state.addingTask && <input type='text' onChange={(e)=> this.handleNewTaskInput(e)} value={this.state.newTask}/>}
            {this.state.addingTask? 
              <button onClick={()=>this.saveTask()}>save</button>
              :
              <button onClick={()=>this.addTask()}>new task</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;

