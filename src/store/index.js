import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
const logger = createLogger();


const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga, logger)
    );

saga.run(rootSaga);

export default store;