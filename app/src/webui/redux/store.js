import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/index';
import sagas from './sagas';

// createSagaMiddleware can accept onError option as a argument
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
