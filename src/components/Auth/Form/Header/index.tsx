import React from 'react'
import styled from 'styled-components'
import { useTheme, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Colors } from 'styles/colors'

export const Header: React.FC = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <IconWrapper color={theme.palette.secondary.main}>
        <LockIcon />
      </IconWrapper>
      <Typography variant='h5'>Вход в аккаунт</Typography>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`

const IconWrapper = styled.div`
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 15px;
`

const LockIcon = styled(LockOutlinedIcon)`
  && {
    fill: ${Colors.white};
  }
`
