import NavBar from "../../common_components/NavBar"
import Product from "./components/Product"
import Cart from "./components/Cart"
import { useEffect, useState } from "react"

const Products = () => {
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartData, setCartData] = useState([]);

    const addToCart = (order) => {
        const newCartData = [...cartData];
        newCartData.push(order);
        setCartData(newCartData);
    }

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error");
                }
                return response.json();
            })
            .then((response) => setProductData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Network Error </p>

    return (
        <>
            <NavBar />
            <h1>This is a products page</h1>
            {productData.map((product) =>
                <Product key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                    addToCartHandle={addToCart}
                />
            )}

            <Cart cartData={cartData} />
        </>

    )
}

export default Products