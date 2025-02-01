import Order from "./Order"
import styles from "./Cart.module.css"

const Cart = ({cartData = []}) => {

    if(cartData.length == 0) {
        return (
            <div className={styles.cart}>
                <h1>Cart</h1>
                <h2>Your cart is empty</h2>
            </div>
        )
        
    }

    else {
        return (
            <div className={styles.cart}>
                <h1>Cart</h1>
                <div className={styles.orders}>
                {cartData.map((order, index) => 
                <div className={styles.order} key={index}>
                    <Order  
                    title={order.title} 
                    image={order.image} 
                    price={order.price} 
                    defaultQuantity={order.quantity}/>
                </div>
                )}
                </div>
            </div>
        )
    }
}

export default Cart