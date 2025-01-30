import Order from "./Order"

const Cart = ({cartData = []}) => {
    if(cartData.length == 0) {
        return (
            <>
                <h2>Cart</h2>
                <p>Your cart is empty</p>
            </>
        )
        
    }

    else {
        return (
            <>
                <h2>Cart</h2>
                {cartData.map((order, index) => 
                <Order key={index}
                    title={order.title} 
                    image={order.image} 
                    description={order.description} 
                    price={order.price} 
                    quantity={order.quantity}/>)}
                
            </>
        )
    }
}

export default Cart