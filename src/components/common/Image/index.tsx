import React from 'react'
import styled from 'styled-components'
import { Colors } from 'styles/colors'

interface ImageProps extends React.HTMLProps<HTMLDivElement> {
  image: string,
  size: number,
}

export const Image = styled(({ image, size, ...rest }: ImageProps) => <div {...rest} />)`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid ${Colors.gray5};
`
