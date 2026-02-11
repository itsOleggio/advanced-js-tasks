import styles from  './ShopItem.module.css';

export function ShopItem({products}){
    return(
        <>
        {   
            products.map((product, index) =>(
                <div key={index} className={styles.listItem}>
                    <img src={product.img} alt={product.name}></img>
                    <h3>{product.name.toUpperCase()}</h3>
                    <span>{product.color}</span>
                    <span className={styles.product_price}>${product.price}</span>
                     <button className={styles.btn_addToCart_list}>ADD TO CART</button>
                </div>
            ))
        }
        </>
    )
}