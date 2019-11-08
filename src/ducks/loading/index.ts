import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import { AuthActions } from 'ducks/auth'
import { ItemsActions } from 'ducks/items'

const auth = handleActions<boolean>({
  [AuthActions.authRequest]: () => true,
  [AuthActions.authFailure]: () => false,
  [AuthActions.authSuccess]: () => false,
}, false)

const items = handleActions<boolean>({
  [ItemsActions.fetchItemsRequest]: () => true,
  [ItemsActions.fetchItemsSuccess]: () => false,
  [ItemsActions.fetchItemsFailure]: () => false,
}, false)

export const loadingReducer = combineReducers({
  auth,
  items,
})
