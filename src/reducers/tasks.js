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

    case 'REMOVE_TASK':
      return state.filter(task =>
        task.id != action.taskId
      );
    default:
      return state
  }
};

export default tasks