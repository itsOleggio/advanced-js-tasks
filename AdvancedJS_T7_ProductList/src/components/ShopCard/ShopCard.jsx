import './ShopCard.css'

export function ShopCard({ products }) {
    return (
        <>
            {
                products.map((product, index) => (
                    <div key={index} className='productCard'>
                        <h3>{product.name.toUpperCase()}</h3>
                        <span>{product.color.toLowerCase()}</span>
                        <img src={product.img} alt={product.name}></img>
                        <div className='product_priceBlock'>
                            <span className='product_price'>${product.price}</span>
                            <button className='btn_addToCart'>ADD TO CART</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}