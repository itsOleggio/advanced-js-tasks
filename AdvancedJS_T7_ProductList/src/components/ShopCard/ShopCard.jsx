import styles from  './ShopCard.module.css'

export function ShopCard({ products }) {
    return (
        <>
            {
                products.map((product, index) => (
                    <div key={index} className={styles.productCard}>
                        <h3>{product.name.toUpperCase()}</h3>
                        <span>{product.color.toLowerCase()}</span>
                        <img src={product.img} alt={product.name}></img>
                        <div className={styles.product_priceBlock}>
                            <span className={styles.product_price}>${product.price}</span>
                            <button className={styles.btn_addToCart}>ADD TO CART</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}