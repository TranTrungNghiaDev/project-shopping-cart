import {useState} from "react"

const Order = ({title, image, price, defaultQuantity}) => {
    const [quantity, setQuantity] = useState(defaultQuantity);

    if(defaultQuantity != quantity) {
        setQuantity(defaultQuantity);
    }

    return(
        <div>
        <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <h3>Price: {price}$ </h3>
            <h4>Quantity: {defaultQuantity}</h4>
            <button>Check Out</button>
            <button>Pay</button>
        </div>
    )
}

export default Order