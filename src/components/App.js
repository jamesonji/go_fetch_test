import React, { Component } from 'react';
import { Link } from 'react-router';
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navigator">
          <Link to="/" className="navigator_link">Home</Link>
          <Link to="/tasks" className="navigator_link">All Tasks</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
