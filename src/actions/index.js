let nextTodoId = 0

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

export const toggleTask = task => {
  return {
    type: 'TOGGLE_TASK',
      task,
  }
}

