import { all } from "redux-saga/effects";
import rootSagaUser from './user/userSaga';
function* rootSaga(){
    yield all([rootSagaUser()]);
}
export default rootSaga;