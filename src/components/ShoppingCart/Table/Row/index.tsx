import React, { useState } from 'react'
import styled from 'styled-components'

import { ToggleButton } from 'components/ShoppingCart/Table/ToggleButton'
import { Image } from 'components/common/Image'

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
        <ImageWrapper image={img} size={24} />
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
const ImageWrapper = styled(Image)`
  margin: 0 auto;
`

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid ${Colors.gray};
  font-size: 14px;
`

const ImageCell = styled.td`
  border: 1px solid ${Colors.gray};
  width: 40px;
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
