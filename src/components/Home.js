import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, addTask} from '../actions';

import '../assets/css/App.css';

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser, addTask}, dispatch);
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
    };
    
    this.addUser = this.addUser.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.selectUser = this.selectUser.bind(this);
    
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    
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
    console.log(user);
    this.setState({
      selectedUserId: user.id,
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
      userId: this.state.selectedUserId,
    };

    console.log(newTask);

    this.props.addTask(newTask);
    
    this.setState({
      addingTask: false,
      newTask: '',
    })
  }
  
  handleNewTaskInput(e){
    this.setState({newTask: e.target.value});
  }
  
  render() {  
    let self = this;
    let userList = this.props.users.map(function(user){
      return (
        <li key={`user_${user.id}`} className="user_name">
          <div onClick={() => self.selectUser(user) }>
            {user.name}
          </div>
        </li>
      )
    });
    
    let tasksList = this.props.tasks.map(function(task){
      if(task.userId !== self.state.selectedUserId){
        return false;
      }
      
      return (
        <li key={`task_${task.id}`} className="user_task">
          <div onClick={() => self.toggleTask() }>
            {task.content}
          </div>
        </li>
      )
    });
    
    return (
      <div>
          <h2>Home</h2>
        
        <div className="todo__container">
          <h4>Users</h4>
          <ul>
            {userList}
          </ul>
        
          <div>
            {this.state.addingUser && <input type='text' onChange={(e)=> this.handleNewUserInput(e)} value={this.state.newUserName}/>}
            {this.state.addingUser? 
              <button onClick={()=>this.saveUser()}>save</button>
              :
              <button onClick={()=>this.addUser()}>new</button>
            }
          </div>
        </div>
        
        
        <div className='task__container'>
          <h4>Tasks</h4>
          <ul>
            {tasksList}
          </ul>
          
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

