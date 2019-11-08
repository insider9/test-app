import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { AuthForm } from 'components/Auth/Form'

import { authRequest } from 'ducks/auth'
import { State } from 'interfaces'

interface AuthComponentProps {
  auth: typeof authRequest,
  loading: boolean,
}

const AuthComponent: React.FC<AuthComponentProps> = ({ auth, loading }) => (
  <Wrapper>
    <AuthForm onSubmit={auth} loading={loading} />
  </Wrapper>
)

const mapStateToProps = (state: State) => ({
  loading: state.loading.auth,
})

export const Auth = connect(mapStateToProps, { auth: authRequest })(AuthComponent)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 28px;
  box-sizing: border-box;
`
