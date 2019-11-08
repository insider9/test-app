import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styled from 'styled-components'

import { Colors } from 'styles/colors'

interface ToggleButtonProps {
  onClick: () => void,
  deleted: boolean,
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ deleted, onClick }) => (
  <Button deleted={deleted} onClick={onClick}>
    +
  </Button>
)

//#region Styled components
interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  deleted: boolean,
}

const Button = styled(({ deleted, ...rest }: ButtonProps) => <button {...rest} />)`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${props => props.deleted ? Colors.secondary : Colors.gray5};
  background-color: ${props => props.deleted ? Colors.secondary : Colors.lightGray2};
  color: ${(props) => props.deleted ? Colors.white : Colors.blueGray};
  font-size: 20px;
  transition: all .1s ease-out;
  transform: ${props => props.deleted ? `rotate(45deg)` : 'none'};
`
//#endregion
