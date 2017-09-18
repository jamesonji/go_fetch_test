export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user,
  }
};

export const addTask = (task) => {
  return {
      type: 'ADD_TASK',
      task,
  }
};

export const toggleTask = (taskId) => {
  return {
    type: 'TOGGLE_TASK',
    taskId,
  }
};

export const removeTask = (taskId) =>{
  return{
    type: 'REMOVE_TASK',
    taskId,
  }
};


