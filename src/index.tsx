import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './App'

import * as serviceWorker from './serviceWorker'
import { configureStore } from 'ducks/configureStore'
import { Colors } from 'styles/colors'

const store = configureStore()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
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
