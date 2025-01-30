import {useState} from "react"

const Product = ({title, image, price,addToCartHandle}) => {
    const [quantity, setQuantity] = useState(0);
    const order = {title, image, price, quantity};

    return(
        <>
            <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <p>
                Price: {price}
            </p>
            <div>

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
                                
            </div>
        </>
    )
}



export default Product