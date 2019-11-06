import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import { Header } from 'components/Auth/Form/Header'
import { Button } from 'components/Auth/Form/Button'
import { Input } from 'components/Auth/Form/Input'

import { ERROR_MESSAGES } from 'constants/errors'

enum FormFields {
  email = 'email',
  password = 'password',
}

export const AuthForm = () => {
  const [data, handleChange] = useState({ email: '', password: '' })
  const initialErrors = { email: '', password: '', checked: false }
  const [errors, setErrors] = useState(initialErrors)

  const validate = () => {
    let ERRORS = { ...initialErrors }

    if (!data.email.trim()) {
      ERRORS.email = ERROR_MESSAGES.emptyField
    }

    if (!data.password) {
      ERRORS.password = ERROR_MESSAGES.emptyField
    }

    ERRORS.checked = true
    setErrors(ERRORS)

    console.log(ERRORS)

    return !ERRORS.email && !ERRORS.password
  }

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.getAttribute('name') as FormFields

    handleChange({
      ...data,
      [field]: e.target.value
    })

    if (errors.checked) {
      validate()
    }
  }

  const onSubmit = () => {
    validate()
  }

  return (
    <Wrapper>
      <Header />
      <Input
        label='Почта'
        name={FormFields.email}
        type='email'
        required
        value={data.email}
        onChange={onFieldChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <Input
        label='Пароль'
        type='password'
        name={FormFields.password}
        required
        value={data.password}
        onChange={onFieldChange}
        error={!!errors.password}
        helperText={errors.password}
      />
      <FormControlLabel
        control={<Checkbox color='primary' />}
        label='Запомнить меня'
      />
      <SubmitButton onClick={onSubmit}>
        Войти в аккаунт
      </SubmitButton>
    </Wrapper>
  )
}

//#region Styled components
const Wrapper = styled.div`
  width: 380px;
  max-width: 100%;
  margin: 0 auto;
  transform: translateY(-50%);
  top: 50%;
  position: relative;
  
  // Disable transform on screen height lower than AuthForm height
  @media screen and (max-height: 480px) {
    position: static;
    transform: none;
    margin-bottom: 28px;
  }
`

const SubmitButton = styled(Button)`
  && {
    margin-top: 32px;
  }
`
//#endregion
