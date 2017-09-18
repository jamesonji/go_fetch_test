import React, { Component } from 'react';
import '../assets/css/App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {toggleTask} from '../actions';

function mapDispatchToProps(dispatch){
  return bindActionCreators({toggleTask}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    tasks: state.tasks,
  }
};

class AllTasks extends Component {
  constructor(props){
    super(props);
    this.toggleTask = this.toggleTask.bind(this);
  }

  toggleTask(taskId){
    this.props.toggleTask(taskId);
  }

  render() {
    let self = this;
    let allTasks = this.props.tasks.map(function (task) {
      let taskUser = self.props.users.filter(function (user) {
        return user.id === task.userId;
      });
      return (
        <div className="all_tasks_list" key={`task_${task.id}`}>
          <div className="all_tasks_user">{taskUser[0].name}</div>
          <div className={"task_list_task" + (task.completed? ' completed' : '')}
               onClick={()=> self.toggleTask(task.id)}
          >{task.content}</div>
        </div>
      )
    })
    return (
      <div className="all_tasks_container">
        <div className="all_tasks_title">
          <h4 className="all_tasks_user">Users</h4>
          <h4 className="all_tasks_task">Tasks</h4>
        </div>
        {allTasks}
      </div>
    );
  }
}

const AllTasksContainer = connect(mapStateToProps, mapDispatchToProps)(AllTasks);
export default AllTasksContainer;

