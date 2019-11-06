import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'

import { Auth } from 'components/Auth'

import { GlobalStyles } from 'styles/global'

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
    <Route path='/auth'>
      <Auth />
    </Route>
    <Redirect from='/' to='/auth' />
  </Router>
)

export default App
