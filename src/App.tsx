import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import { Auth } from 'components/Auth'
import { ShoppingCart } from 'components/ShoppingCart'

import { GlobalStyles } from 'styles/global'
import { State } from 'interfaces'

interface AppProps {
  isAuthenticated: boolean,
}

const AppComponent: React.FC<AppProps> = ({ isAuthenticated }) => (
  <Router>
    <GlobalStyles />
    <Route path='/auth'>
      {isAuthenticated ? <Redirect to='/cart' /> : <Auth />}
    </Route>
    <Route path='/cart'>
      {!isAuthenticated ? <Redirect to='/auth' /> : <ShoppingCart />}
    </Route>
    <Redirect from='/' to={isAuthenticated ? '/cart' : '/auth'} />
  </Router>
)

const mapStateToProps = (state: State) => ({
  isAuthenticated: !!state.auth.jwt,
})

export const App = connect(mapStateToProps)(AppComponent)
