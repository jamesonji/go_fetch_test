import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, addTodo} from '../../actions';
import '../../assets/css/App.css';

function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser, addTodo}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    todos: state.todos,
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
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

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;

