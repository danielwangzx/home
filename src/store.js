import rootReducer from './reducers';
import {
     createStore, applyMiddleware, compose,
  } from 'redux';
import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.devToolsExtension && process.env.NODE_ENV !== 'production' ?
  compose(
    applyMiddleware(sagaMiddleware,logger),
    window.devToolsExtension(),
  ) :
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store; 