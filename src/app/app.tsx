import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductsPage } from "@/pages/products"
import { CartPage } from "@/pages/cart"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
