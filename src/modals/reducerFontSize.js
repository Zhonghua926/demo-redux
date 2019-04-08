import {
    put,
    call,
    // takeEvery,
    takeLatest
} from 'redux-saga/effects';

export const BIGGER = 'bigger';

export const SMALLER = 'smaller';

export const BIGGER_ASYNC = 'bigger_async';

export const SMALLER_ASYNC = 'smaller_async';

const initValues = {
    size : 16
}

export const bigger = (size) => {
    return {
        type: BIGGER,
        size,
    }
}

export const smaller = (size) => {
    return {
        type: SMALLER,
        size,
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function* biggerAsync() {
    yield call(delay, 3000);
    yield put({ type: BIGGER});
}
function* smallerAsync() {
    yield call(delay, 3000);
    yield put({ type: SMALLER});
}
export function* asyncSaga() {
    // yield takeEvery(BIGGER_ASYNC, biggerAsync); // 允许多个任务同时启动，在短时间频繁点击时，将会多次执行biggerAsync。
    yield takeLatest(BIGGER_ASYNC, biggerAsync);  // 只监听最新的请求，可以防止多次请求，在短时间频繁点击时，只执行一次。
    yield takeLatest(SMALLER_ASYNC, smallerAsync);
}

export function reducerFontSize(state = initValues, action = {}) {
    switch(action.type) {
        case BIGGER: return { ...state, size: state.size + 1 };
        case SMALLER: return { ...state, size: state.size - 1 };
        case BIGGER_ASYNC: return state;
        case SMALLER_ASYNC: return state;
        default: return state;
    }
}