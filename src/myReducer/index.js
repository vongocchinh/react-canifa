import {combineReducers} from 'redux';
import userStore from './User/user';
const myReducer=combineReducers({
    userStore
});
export default myReducer;