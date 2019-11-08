export interface AuthData {
  email: string,
  password: string,
}

export interface AuthState {
  jwt: null | string,
}

export interface LoadingState {
  auth: boolean,
}

export interface State {
  auth: AuthState,
  loading: LoadingState,
}
