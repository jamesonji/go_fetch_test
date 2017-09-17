import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'

const todoApp = combineReducers({
  users,
  todos,
})

export default todoApp