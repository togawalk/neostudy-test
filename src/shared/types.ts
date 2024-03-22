export interface Product {
  image: string;
  title: string;
  price: number;
  priceWithDiscount?: number;
  rate: number;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}
