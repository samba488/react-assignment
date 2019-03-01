import { take, call, put, cancel, race } from "redux-saga/effects";
import delay from "redux-saga";
import API from "../api";
import * as actions from "../actions";

//Saga for dron data map
function* watchFetchDronData(action) {
  while(true) {
    const { error, data } = yield call(API.findDronData);

    if (error) {
      console.log({ error });
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }

    yield put({ type: actions.DRON_DATA_RECEIVED, data });
    yield call(delay, 4000);
  }
  
}

function* watchAppLoad() {
  while (true) {
    yield take(actions.FETCH_DRON_DATA);
    yield race([
      call(watchFetchDronData),
      take(actions.FETCH_STOP)
    ]);
  }
}

export default [watchAppLoad];
