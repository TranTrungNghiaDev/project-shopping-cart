import NavBar from "../../common_components/NavBar"
import {useEffect, useState} from "react"
import Product from "../products/components/Product";

const Cart = () => {
    const [cartData, setCartData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/carts/user/2", {mode:"cors"})
        .then((response) => {
            if(response.status >= 400) {
                throw new Error("Sever error");
            }
            return response.json();
        })
        .then((response) => console.log(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <p>Loading...</p>
    if(error) return <p>Network Error</p>

    return (
        <>
        <NavBar />
        <h1>This is a cart page</h1>
        </>
    )
}

export default Cart