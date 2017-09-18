import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../actions';
import { Link } from 'react-router';

import '../assets/css/App.css';

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

class UserList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      addingUser: false,
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
    let users = this.props.users;
    let newUser = {id: users.length, name: this.state.newUserName};
    
    this.props.addUser(newUser);
    
    this.setState({
      addingUser: false,
      newUserName: '',
    })
  }

  handleNewUserInput(e){
    this.setState({newUserName: e.target.value});
  }
  
  render() {  
    let userList = this.props.users.map(function(user){
      return (
        <li key={`user_${user.id}`}>
          {user.name}
        </li>
      )
    })
    
    return (
      <div>
        <div className="users_container">
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
      </div>
    );
  }
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListContainer;

