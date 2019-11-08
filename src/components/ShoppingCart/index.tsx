import React from 'react'
import styled from 'styled-components'
import {Colors} from 'styles/colors'

export const ShoppingCart = () => (
  <Wrapper>
    <Header>
      Результаты расчёта
    </Header>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 60px 34px;
  max-width: 940px;
  margin: 0 auto;
  font-family: "IBM Plex Sans", sans-serif;
`

const Header = styled.div`
  font-size: 18px;
  padding-bottom: 21px;
  font-weight: bold;
  border-bottom: 1px solid ${Colors.border};
`
