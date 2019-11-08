import React from 'react'
import { ProductStorageTypes } from 'constants/common'

interface MobileItemProps {
  img: string,
  name: string,
  count: number,
  price: number,
  productType: ProductStorageTypes,
}


export const ShoppingCartMobileItem: React.FC<MobileItemProps> = () => (
  <div>123</div>
)
