import React, { Component } from 'react';
import '../../assets/css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users:[{id:10, name:'Song'}],
      addingUser: false,
      addingTask: false,
    };
    
    this.addUser = this.addUser.bind(this);
  }
  
  addUser(){
    this.setState({
      addingUser: true
    })
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
        
          {/* {this.state.addingUser && <input type='text'></input>} */}
          <button onClick={()=>this.addUser()}>new</button>
        </div>
      </div>
    );
  }
}

export default Home;
