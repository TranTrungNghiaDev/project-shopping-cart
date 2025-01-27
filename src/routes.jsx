import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import Cart from "./pages/cart/Cart"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/cart",
        element: <Cart />
    },
]

export default routes