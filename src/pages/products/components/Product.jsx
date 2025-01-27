const Product = ({title, image, description, price}) => {
    return(
        <>
            <img src={image} alt={title + " image"}/>
            <h2>{title}</h2>
            <p>{description}
                <br />
                Price: {price}
            </p>
            <button>-</button>
            <input type="number" min={0} defaultValue={0}/>
            <button>+</button>
            <button>Add to cart</button>
        </>
    )
}

export default Product