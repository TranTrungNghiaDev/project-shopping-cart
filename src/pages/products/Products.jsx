import NavBar from "../../common_components/NavBar"
import Product from "./components/Product"
import Cart from "./components/Cart"
import { useEffect, useState } from "react"
import styles from "./Products.module.css"

const Products = () => {
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartData, setCartData] = useState([]);

    const addToCart = (order) => {
        const newCartData = [...cartData];
        for (let index = 0; index < newCartData.length; index++) {
            if(order.title == newCartData[index].title)
            {
                newCartData[index].quantity += order.quantity
                setCartData(newCartData)
                return
            }
        }
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
            <div className={styles.products}>
                
                {productData.map((product) =>
                <div className={styles.product}>
                    <Product key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        addToCartHandle={addToCart}
                    />
                </div>
                    
                )}
            </div>

            <Cart cartData={cartData} />
        </>

    )
}

export default Products