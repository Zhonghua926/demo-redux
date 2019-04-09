import { put, call, takeLatest } from 'redux-saga/effects';

export const BIGGER = 'bigger';

export const SMALLER = 'smaller';

export const BIGGER_ASYNC = 'bigger_async';

export const SMALLER_ASYNC = 'smaller_async';

const initValues = {
    size : 16
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function* biggerAsync(action) {
    const { size } = action;
    yield call(delay, 3000);
    yield put({ type: BIGGER, size});
}
function* smallerAsync(action) {
    const { size } = action;
    yield call(delay, 3000);
    yield put({ type: SMALLER, size});
}
export function* asyncSaga() {
    yield takeLatest(BIGGER_ASYNC, biggerAsync);  // 只监听最新的请求，可以防止多次请求，在短时间频繁点击时，只执行一次。
    yield takeLatest(SMALLER_ASYNC, smallerAsync);
}

export function reducerFontSize(state = initValues, action) {
    const { size } = action;
    switch(action.type) {
        case BIGGER: return { ...state, size: size + 1 };
        case SMALLER: return { ...state, size: size - 1 };
        default: return state;
    }
}