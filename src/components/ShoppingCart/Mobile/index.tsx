import React from 'react'
import styled from 'styled-components'

import { Item } from 'interfaces'
import { ShoppingCartMobileItem } from 'components/ShoppingCart/Mobile/Item'
import { Breakpoints } from 'styles/breakpoints'

interface ShoppingCartMobileProps {
  items: Item[],
}

export const ShoppingCartMobile: React.FC<ShoppingCartMobileProps> = ({ items }) => (
  <Wrapper>
    {items.map((item: Item) => (
      <ShoppingCartMobileItem
        key={item.id}
        img={item.img}
        name={item.name}
        count={item.count}
        productType={item.productType}
        price={item.price}
      />
      ))}
  </Wrapper>
)

//#region Styled components
const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  
  @media (min-width: ${Breakpoints.sm + 1}px) {
    display: none;
  }
`
//#endregion
