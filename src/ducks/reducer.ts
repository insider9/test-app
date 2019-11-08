import { combineReducers } from 'redux'

import { authReducer } from 'ducks/auth'
import { loadingReducer } from 'ducks/loading'

export const reducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
})
