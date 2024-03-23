export interface Product {
  id: string
  image: string
  title: string
  price: number
  priceWithDiscount?: number
  rate: number
}

export interface Category {
  id: string
  name: string
  products: Product[]
}
