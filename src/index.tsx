import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

import App from './App'

import * as serviceWorker from './serviceWorker'
import { configureStore } from 'ducks/configureStore'
import { Colors } from 'styles/colors'

const store = configureStore()

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
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
