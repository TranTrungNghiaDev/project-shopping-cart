import NavBar from "../../common_components/NavBar"
import Product from "./components/Product"
import {useEffect, useState} from "react"

const Products = () => {
        const [productData, setProductData] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch("https://fakestoreapi.com/products", {mode:"cors"})
            .then((response) => {
                if(response.status >= 400) {
                    throw new Error("Server Error");
                }
                return response.json();
            })
            .then((response) => setProductData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        }, [])

        if(loading) return <p>Loading...</p>
        if(error) return <p>Network Error </p>

        return (
        <>
        <NavBar />
        <h1>This is a products page</h1>
        {productData.map((product) => 
            <Product key={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}/>
        )}
        </>
        
    )
}

export default Products