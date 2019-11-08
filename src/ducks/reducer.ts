import { combineReducers } from 'redux'

import { authReducer } from 'ducks/auth'
import { loadingReducer } from 'ducks/loading'
import { itemsReducer } from 'ducks/items'

export const reducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  items: itemsReducer,
})
