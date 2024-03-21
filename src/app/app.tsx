import { ProductsPage } from "@/pages/products"
import { CartPage } from "@/pages/cart"
import { MainLayout } from "@/shared/ui/main-layout"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />
      },
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
