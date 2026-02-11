import './ShopItem.css';

export function ShopItem({products}){
    return(
        <>
        {   
            products.map((product, index) =>(
                <div key={index} className='listItem'>
                    <img src={product.img} alt={product.name}></img>
                    <h3>{product.name.toUpperCase()}</h3>
                    <span>{product.color}</span>
                    <span className='product_price'>${product.price}</span>
                     <button className='btn_addToCart_list'>ADD TO CART</button>
                </div>
            ))
        }
        </>
    )
}