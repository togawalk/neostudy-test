import { Product } from '@/shared/types'
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'

interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
  getCartTotalPrice: () => number
  getCartLength: () => number
  changeQuantity: (item: CartItem, amount: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartItemsFromStorage: string | null = localStorage.getItem('cartItems')
  const initialCartItems: CartItem[] = cartItemsFromStorage
    ? JSON.parse(cartItemsFromStorage)
    : []

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    )

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
    }
  }

  const changeQuantity = (item: CartItem, amount: number) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    )
    if (isItemInCart) {
      const updatedQuantity = isItemInCart?.quantity + amount
      if (updatedQuantity >= 1 && updatedQuantity <= 99) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.product.id === item.product.id
              ? { ...cartItem, quantity: updatedQuantity }
              : cartItem
          )
        )
      }
    }
  }

  const removeFromCart = (item: CartItem) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.product.id === item.product.id
    )

    if (isItemInCart) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.product.id !== item.product.id)
      )
    }
  }

  const getCartTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.priceWithDiscount || item.product.price
      return total + price * item.quantity
    }, 0)
  }

  const getCartLength = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  useEffect(() => {
    const data = localStorage.getItem('cartItems')
    if (data) {
      setCartItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotalPrice,
        getCartLength,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
