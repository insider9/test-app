import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ShoppingCartTable } from 'components/ShoppingCart/Table'
import { ShoppingCartMobile } from 'components/ShoppingCart/Mobile'

import { Colors } from 'styles/colors'
import { Item, State } from 'interfaces'
import { fetchItemsRequest } from 'ducks/items'

interface ShoppingCartProps {
  fetchItems: typeof fetchItemsRequest,
  items: Item[],
  loading: boolean,
}

const ShoppingCartComponent: React.FC<ShoppingCartProps> = ({ fetchItems, items, loading }) => {
  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return (
    <Wrapper>
      <Header>
        Результаты расчёта
      </Header>

      {
        loading
          ? (
            <LoaderWrapper>
              <CircularProgress size={40} color='secondary' />
            </LoaderWrapper>
          )
          : (
            <>
              <ShoppingCartTable items={items} />
              <ShoppingCartMobile items={items} />
            </>
          )
      }
    </Wrapper>
  )
}

const mapStateToProps = (state: State) => ({
  items: state.items,
  loading: state.loading.items,
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

const LoaderWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
//#endregion
