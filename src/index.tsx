import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

import { App } from './App'

import * as serviceWorker from './serviceWorker'
import { configureStore } from 'ducks/configureStore'
import { Colors } from 'styles/colors'

const store = configureStore()

store.subscribe(() => {
  const { jwt } = store.getState().auth
  if (!localStorage.getItem('jwt') && jwt) {
    localStorage.setItem('jwt', jwt)
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.secondary,
    },
  }
})

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <App />
        </SCThemeProvider>
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
