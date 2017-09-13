import {combineReducers} from 'redux';
import UserReducer from './reducers-users';
import ActiveUser from './active-user-reducer';
const AllReducer = combineReducers({
  users : UserReducer,
  ActiveUser : ActiveUser,
});
export default AllReducer;
