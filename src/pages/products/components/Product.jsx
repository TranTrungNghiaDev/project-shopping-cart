import {useState} from "react"

const Product = ({title, image, description, price,addToCartHandle}) => {
    const [quantity, setQuantity] = useState(0);
    const order = {title, image, description, price, quantity};

    return(
        <>
            <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <p>{description}
                <br />
                Price: {price}
            </p>
            <button onClick={() => {
                if(quantity > 0) {
                    setQuantity(Number(quantity) - 1)
                }
                } }>-</button>
            <input type="number" min={0} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <button onClick={() => {setQuantity(Number(quantity) + 1)}}>+</button>
            <button onClick={() => {
                if(quantity > 0) {
                    return addToCartHandle(order)
                }
                }}>Add to cart</button>
        </>
    )
}



export default Product