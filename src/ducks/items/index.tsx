import { createAction, handleActions } from 'redux-actions'
import { takeEvery, put, delay } from 'redux-saga/effects'

import { Item } from 'interfaces'

//#region Actions
export enum ItemsActions {
  fetchItemsRequest = 'APP / ITEMS / FETCH_REQUEST',
  fetchItemsSuccess = 'APP / ITEMS / FETCH_SUCCESS',
  fetchItemsFailure = 'APP / ITEMS / FETCH_FAILURE',
}

export const fetchItemsRequest = createAction(ItemsActions.fetchItemsRequest)
export const fetchItemsSuccess = createAction(ItemsActions.fetchItemsSuccess)
export const fetchItemsFailure = createAction(ItemsActions.fetchItemsFailure)
//#endregion

//#region Reducer
const initialState: Item[] = []

export const itemsReducer = handleActions<Item[]>({
  [ItemsActions.fetchItemsSuccess]: (state, action) => action.payload,
}, initialState)
//#endregion

//#region Sagas
function* fetchItems() {
  try {
    // TODO switch to real API GET method
    const response = yield fetch(`${process.env.REACT_APP_API_URL}/items`)
      .then(response => response.json())
    yield delay(1000)
    yield put(fetchItemsSuccess(response))
  } catch (e) {
    yield put(fetchItemsFailure(e))
  }
}

export function* itemsSagas() {
  yield takeEvery(ItemsActions.fetchItemsRequest, fetchItems)
}
//#endregion
