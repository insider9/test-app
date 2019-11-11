import { ProductStorageTypes } from 'constants/common'

export interface AuthData {
  email: string,
  password: string,
}

export interface AuthState {
  jwt: null | string,
}

export interface LoadingState {
  auth: boolean,
  items: boolean,
}

export interface Item {
  id: number,
  name: string,
  count: number,
  price: number,
  productType: ProductStorageTypes,
  img: string,
}

export interface State {
  auth: AuthState,
  loading: LoadingState,
  items: Item[],
}
