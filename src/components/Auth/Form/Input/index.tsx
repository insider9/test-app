import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

export const Input: React.FC<TextFieldProps> = (props) => (
  <TextField {...props} variant='outlined' margin='normal' fullWidth />
)
