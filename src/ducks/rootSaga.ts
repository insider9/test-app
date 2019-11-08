import { all } from 'redux-saga/effects'

import { authSagas } from './auth'
import { itemsSagas } from 'ducks/items'

export function* rootSaga() {
  yield all([
    authSagas(),
    itemsSagas(),
  ])
}
