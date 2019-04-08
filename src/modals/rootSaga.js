import { all } from 'redux-saga/effects';
import { biggerAsyncSaga, smallerAsyncSaga } from './reducerFontSize';

export default function* rootSaga() {
    yield all([
        biggerAsyncSaga(),
        smallerAsyncSaga()
    ])
  }