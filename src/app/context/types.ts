import { Product } from '@/shared/types'

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
  getCartTotalPrice: () => number
  getCartLength: () => number
  changeQuantity: (item: CartItem, amount: number) => void
}

