import React from 'react'
import styled from 'styled-components'

import { Image } from 'components/common/Image'

import { ProductStorageTypes, STORAGE_TYPE_ALIASES } from 'constants/common'
import { Colors } from 'styles/colors'

interface MobileItemProps {
  img: string,
  name: string,
  count: number,
  price: number,
  productType: ProductStorageTypes,
}

export const ShoppingCartMobileItem: React.FC<MobileItemProps> = ({
  img,
  name,
  count,
  price,
  productType,
}) => (
  <Table>
    <tbody>
    <Row>
      <ImageWrapper colSpan={2}>
        <StyledImage image={img} size={80} />
      </ImageWrapper>
    </Row>
    <Row>
      <Header>Наименование</Header>
      <Cell>{name}</Cell>
    </Row>
      <Row>
        <Header>Кол-во</Header>
        <Cell>{count} {STORAGE_TYPE_ALIASES[productType]}</Cell>
      </Row>
      <Row>
        <Header>Цена за ед, ₽</Header>
        <Cell>{price.toFixed(2)}</Cell>
      </Row>
      <Row>
        <Header>Стоимость, ₽</Header>
        <Cell>{(price * count).toFixed(2)}</Cell>
      </Row>
    </tbody>
  </Table>
)

//#region Styled components
const Table = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  width: 100%;
`

const Row = styled.tr`
  font-size: 12px;
`

const ImageWrapper = styled.td`
  padding: 10px;
  border: 1px solid ${Colors.gray};
`

const StyledImage = styled(Image)`
  margin: 0 auto;
`

const Cell = styled.td`
  border: 1px solid ${Colors.gray};
  padding: 14px 10px;
`

const Header = styled.th`
  border: 1px solid ${Colors.gray};
  padding: 14px 10px;
  background-color: ${Colors.lightGray};
  font-weight: bold;
  width: 50%;
`
//#endregion
