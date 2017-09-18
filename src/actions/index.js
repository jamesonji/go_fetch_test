export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user,
  }
}

export const addTask = (task) => {
  return {
      type: 'ADD_TASK',
      task,
  }
}

export const toggleTask = (taskId) => {
  console.log(taskId);
  return {
    type: 'TOGGLE_TASK',
    taskId,
  }
}

