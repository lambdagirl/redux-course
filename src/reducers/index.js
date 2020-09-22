import { combineReducers } from 'redux'
import authedUser from './authedUser'
import User from "./user";

export default combineReducers({
  authedUser,
  User,
});