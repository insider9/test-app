import React from 'react'
import styled from 'styled-components'

import { Colors } from 'styles/colors'
import { Item } from 'interfaces'
import { ShoppingCartTableRow } from 'components/ShoppingCart/Table/Row'
import { Breakpoints } from 'styles/breakpoints'

interface TableProps {
  items: Item[],
}

export const ShoppingCartTable: React.FC<TableProps> = ({ items }) => (
  <StyledTable>
    <thead>
      <tr>
        <TableHeader />
        <TableHeaderName>Наименование</TableHeaderName>
        <TableHeader>Кол-во</TableHeader>
        <TableHeader>Цена за ед, ₽</TableHeader>
        <TableHeader>Стоимость, ₽</TableHeader>
        <TableHeader />
      </tr>
    </thead>
    <tbody>
      {items.map((item: Item) => (
        <ShoppingCartTableRow
          img={item.img}
          name={item.name}
          count={item.count}
          price={item.price}
          storageType={item.productType}
          key={item.id}
        />
        ))}
    </tbody>
  </StyledTable>
)

//#region Styled Components
const StyledTable = styled.table`
  width: 100%;
  margin-top: 30px;
  border: 1px solid ${Colors.gray};
  border-collapse: collapse;
  text-align: center;
  
  @media (max-width: ${Breakpoints.sm}px) {
    display: none;
  }
`

const TableHeader = styled.th`
  font-weight: bold;
  font-size: 14px;
  background-color: ${Colors.lightGray};
  padding: 13px 10px;
  border: 1px solid ${Colors.gray};
`

const TableHeaderName = styled(TableHeader)`
  text-align: left;
`
//#endregion
