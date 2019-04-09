import { all } from 'redux-saga/effects';
import { asyncSaga } from './reducerFontSize';

export default function* rootSaga() {
    yield all([
        asyncSaga(),
    ])
}