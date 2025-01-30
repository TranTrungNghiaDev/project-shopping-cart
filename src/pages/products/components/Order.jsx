const Order = ({title, image, description, price, quantity}) => {
    return(
        <>
        <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <p>{description}
                <br />
                Price: {price}
            </p>
            <input type="number" min={0} defaultValue={quantity}/>
            <button>Check Out</button>
            <button>Pay</button>
        </>
    )
}

export default Order