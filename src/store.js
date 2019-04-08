import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducerCaption } from './modals/reducerCaption';
import { reducerFontSize } from './modals/reducerFontSize';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modals/rootSaga';

const sagaMiddleware = createSagaMiddleware()
let middlewares = []
middlewares.push(sagaMiddleware)

const reducer = combineReducers({
    reducerCaption,
    reducerFontSize
});
const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
