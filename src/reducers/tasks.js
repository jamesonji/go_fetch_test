const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task,
      ];
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id == action.taskId)
          ? {...task, completed: !task.completed}
          : task
      );
    default:
      return state
  }
};

export default tasks