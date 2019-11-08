import React, { useState } from 'react'
import styled from 'styled-components'

import { ToggleButton } from 'components/ShoppingCart/Table/ToggleButton'

import { ProductStorageTypes, STORAGE_TYPE_ALIASES } from 'constants/common'
import { Colors } from 'styles/colors'

interface TableRowProps {
  img: string,
  name: string,
  count: number,
  price: number,
  storageType: ProductStorageTypes,
}

export const ShoppingCartTableRow: React.FC<TableRowProps> = ({
  img,
  name,
  count,
  price,
  storageType,
}) => {
  const [deleted, toggleDeleted] = useState(false)

  return (
    <Wrapper deleted={deleted}>
      <ImageCell>
        <ImageWrapper image={img} />
      </ImageCell>
      <NameCell>{name}</NameCell>
      <TableCell>{count} {STORAGE_TYPE_ALIASES[storageType]}</TableCell>
      <TableCell>{price.toFixed(2)}</TableCell>
      <TableCell>{(count * price).toFixed(2)}</TableCell>
      <TableCell>
        <ToggleButton onClick={() => toggleDeleted(!deleted)} deleted={deleted} />
      </TableCell>
    </Wrapper>
  )
}

//#region Styled components
interface ImageProps extends React.HTMLProps<HTMLDivElement> {
  image: string,
}

const ImageWrapper = styled(({ image, ...rest }: ImageProps) => <div {...rest} />)`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 2px 0 10px;
  border: 1px solid ${Colors.gray5};
`

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid ${Colors.gray};
  font-size: 14px;
`

const ImageCell = styled.td`
  border: 1px solid ${Colors.gray};
`

const NameCell = styled(TableCell)`
  text-align: left;
`

interface RowWrapperProps extends React.HTMLProps<HTMLTableRowElement> {
  deleted: boolean
}

const Wrapper = styled(({ deleted, ...rest }: RowWrapperProps) => <tr {...rest} />)`
  background-color: ${props => props.deleted ? Colors.lightGray2 : Colors.white};
  transition: .1s ease-out all;
`
//#endregion
