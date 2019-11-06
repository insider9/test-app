import React from 'react'
import styled from 'styled-components'
import { AuthForm } from 'components/Auth/Form'

export const Auth = () => (
  <Wrapper>
    <AuthForm />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 28px;
  box-sizing: border-box;
`
