import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { ShoppingCartTable } from 'components/ShoppingCart/Table'

import { Colors } from 'styles/colors'
import { Item, State } from 'interfaces'
import { fetchItemsRequest } from 'ducks/items'

interface ShoppingCartProps {
  fetchItems: typeof fetchItemsRequest,
  items: Item[]
}

const ShoppingCartComponent: React.FC<ShoppingCartProps> = ({ fetchItems, items }) => {
  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <Wrapper>
      <Header>
        Результаты расчёта
      </Header>
      <ShoppingCartTable items={items} />
    </Wrapper>
  )
}

const mapStateToProps = (state: State) => ({
  items: state.items,
})

export const ShoppingCart = connect(mapStateToProps, { fetchItems: fetchItemsRequest })(ShoppingCartComponent)

//#region Styled components
const Wrapper = styled.div`
  padding: 60px 34px;
  max-width: 940px;
  margin: 0 auto;
  font-family: "IBM Plex Sans", sans-serif;
`

const Header = styled.div`
  font-size: 18px;
  padding-bottom: 21px;
  font-weight: bold;
  border-bottom: 1px solid ${Colors.gray};
  color: ${({ theme }) => theme.palette.secondary.main};
`
//#endregion
