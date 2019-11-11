import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { Header } from 'components/Auth/Form/Header'
import { Button } from 'components/Auth/Form/Button'
import { Input } from 'components/Auth/Form/Input'

import { ERROR_MESSAGES } from 'constants/errors'
import { AuthData } from 'interfaces'
import { EMAIL_REGEXP } from 'constants/regexp'
import { Colors } from 'styles/colors'

enum FormFields {
  email = 'email',
  password = 'password',
}

interface AuthFormProps {
  onSubmit: (data: AuthData) => void,
  loading: boolean,
}

export const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, loading }) => {
  const [data, handleChange] = useState({ email: '', password: '' })
  const initialErrors = { email: '', password: '', checked: false }
  const [errors, setErrors] = useState(initialErrors)

  const validate = (values: AuthData = data) => {
    let ERRORS = { ...initialErrors }

    if (!values.email.trim()) {
      ERRORS.email = ERROR_MESSAGES.emptyField
    }

    if (!EMAIL_REGEXP.test(values.email)) {
      ERRORS.email = ERROR_MESSAGES.incorrectEmail
    }

    if (!values.password) {
      ERRORS.password = ERROR_MESSAGES.emptyField
    }

    ERRORS.checked = true
    setErrors(ERRORS)

    return !ERRORS.email && !ERRORS.password
  }

  const onFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.getAttribute('name') as FormFields

    const values = {
      ...data,
      [field]: e.target.value,
    }

    handleChange(values)

    if (errors.checked) {
      validate(values)
    }
  }

  const onSubmitClick = () => {
    if (validate()) {
      onSubmit(data)
    }
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
      <SubmitButton onClick={onSubmitClick} loading={loading}>
        Войти в аккаунт
      </SubmitButton>
      <LinksWrapper>
        <Link href='#' component='a'>
          <Typography variant='body2'>Забыли пароль?</Typography>
        </Link>
        <Link href='#' component='a'>
          <Typography variant='body2'>Регистрация</Typography>
        </Link>
      </LinksWrapper>
      <Copyright>
        <Typography variant='body2'>Copyright© Ваш сайт 2019.</Typography>
      </Copyright>
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
  @media screen and (max-height: 540px) {
    top: 0;
    transform: none;
    margin-bottom: 28px;
  }
`

const SubmitButton = styled(Button)`
  && {
    margin-top: 32px;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  font-size: 14px;
`

const Copyright = styled.div`
  color: ${Colors.black};
  opacity: .54;
  text-align: center;
  position: absolute;
  bottom: -90px;
  width: 100%;
  margin-bottom: 30px;
`
//#endregion
