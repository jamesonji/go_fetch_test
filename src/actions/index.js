let nextTodoId = 0

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    user,
  }
}

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

