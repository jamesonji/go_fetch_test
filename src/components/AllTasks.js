import React, { Component } from 'react';
import '../assets/css/App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tasks: state.tasks,
  }
}

class AllTasks extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let allTasks = this.props.tasks.map(function (task) {
      return (
        <div className="all_tasks_list" key={`task_${task.id}`}>
          <div className="all_tasks_user">{task.userName}</div>
          <div className="all_tasks_task">{task.content}</div>
        </div>
      )
    })
    return (
      <div className="all_tasks_container">
        <div className="all_tasks_title">
          <div className="all_tasks_user">Users</div>
          <div className="all_tasks_task">Tasks</div>
        </div>
        {allTasks}
      </div>
    );
  }
}

const AllTasksContainer = connect(mapStateToProps, mapDispatchToProps)(AllTasks);
export default AllTasksContainer;

