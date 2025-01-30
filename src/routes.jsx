import Home from "./pages/home/Home"
import Products from "./pages/products/Products"

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    }
]

export default routes