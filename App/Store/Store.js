import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Redux';
import rootSaga from '../Sagas';

export default function configureStore(preloadedState) {
  const middlewares = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middlewareEnhancer),
  );

  sagaMiddleware.run(rootSaga);

  //hot reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../Redux', () => store.replaceReducer(rootReducer));
  }
  return store;
}
