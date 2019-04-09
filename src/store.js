import { createStore, combineReducers } from 'redux';
import { reducerCaption } from './modals/reducerCaption';
import { reducerFontSize } from './modals/reducerFontSize';

const reducer = combineReducers({
    reducerCaption,
    reducerFontSize
});

const store = createStore(reducer);

export default store;
