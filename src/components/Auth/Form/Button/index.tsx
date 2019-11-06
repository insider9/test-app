import React from 'react'
import styled from 'styled-components'
import MuiButton, { ButtonProps } from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

interface CustomButtonProps {
  loading?: boolean,
}

export const Button: React.FC<ButtonProps & CustomButtonProps> = ({ children, loading, ...rest }) => (
  <StyledButton
    {...rest}
    disabled={rest.disabled || loading}
    color={rest.color || 'primary'}
    variant='contained'
    fullWidth
  >
    {loading ? <CircularProgress /> : children}
  </StyledButton>
)

const StyledButton = styled(MuiButton)`
  && {
    text-transform: none;
  }
`
