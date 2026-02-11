import { ShopItem } from '../ShopItem/ShopItem'
import styles from './ListView.module.css'

export default function ListView({products}){

    return(
        <div className={styles.listContainer}>
            <ShopItem products={products}/>
        </div>
        
    )
}