import {useState} from "react"

const Order = ({title, image, price, defaultQuantity}) => {
    const [quantity, setQuantity] = useState(defaultQuantity);

    return(
        <div>
        <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <p>
                Price: {price}
            </p>
            <button onClick={() => {
                if(quantity > 0) {
                    setQuantity(Number(quantity) - 1)
                }
                } }>-</button>
            <input type="number" min={0} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
            <button onClick={() => {setQuantity(Number(quantity) + 1)}}>+</button>
            <button>Check Out</button>
            <button>Pay</button>
        </div>
    )
}

export default Order