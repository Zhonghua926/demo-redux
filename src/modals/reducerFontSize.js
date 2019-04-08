import { put, call, takeEvery } from 'redux-saga/effects';

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
export function* biggerAsyncSaga() {
    yield takeEvery(BIGGER_ASYNC, biggerAsync);
}

function* smallerAsync() {
    yield call(delay, 3000);
    yield put({ type: SMALLER});
}
export function* smallerAsyncSaga() {
    yield takeEvery(SMALLER_ASYNC, smallerAsync);
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