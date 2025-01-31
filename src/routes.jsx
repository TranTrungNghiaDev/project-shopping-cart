import Home from "./pages/home/Home"
import Products from "./pages/products/Products"

const routes = [
    {
        path: "/project-shopping-cart",
        element: <Home />
    },
    {
        path: "/project-shopping-cart/products",
        element: <Products />
    }
]

export default routes