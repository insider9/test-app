import { applyMiddleware, compose, createStore, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { reducer } from 'ducks/reducer'
import {rootSaga} from 'ducks/rootSaga'

export const configureStore = () => {
  const middlewares: Middleware[] = []
  const sagaMiddleware = createSagaMiddleware()

  middlewares.push(sagaMiddleware)

  const composeEnhancers =
    typeof window === 'object' &&
    process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  )

  const store = createStore(
    reducer,
    enhancer
  )

  sagaMiddleware.run(rootSaga)

  return store
}
