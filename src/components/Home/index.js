import React, { Component } from 'react';
import '../../assets/css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users:[{id:0, name:'Song', tasks:[]}],
      addingUser: false,
      addingTask: false,
      newUserName:'',
    };
    
    this.addUser = this.addUser.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.handleNewUserInput = this.handleNewUserInput.bind(this);
  }
  
  addUser(){
    this.setState({
      addingUser: true
    });
  }
  
  saveUser(){
    let users = this.state.users;
    let newUser = {id: users.length, name: this.state.newUserName, tasks:[]};
    users.push(newUser);
    this.setState({
      users,
      addingUser: false,
      newUserName: '',
    })
  }
  
  handleNewUserInput(e){
    this.setState({newUserName: e.target.value});
  }
  
  render() {  
    let users = this.state.users;
    
    let userList = users.map(function(user){
      return (
        <li key={`user_${user.id}`}>
          {user.name}
        </li>
      )
    })
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>To Do List</h2>
        </div>
        
        <div className="todo__container">
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
      </div>
    );
  }
}

export default Home;
