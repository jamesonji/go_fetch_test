import React, { Component } from 'react';
import { Link } from 'react-router';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>All Tasks</h2>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
