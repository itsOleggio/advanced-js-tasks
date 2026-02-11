import {ShopCard} from '../ShopCard/ShopCard'
import { ShopItem } from '../ShopItem/ShopItem'
import styles from './CardsView.module.css'

export default function CardsView({products}) {
    return (
        <div className={styles.productContainer}>
            <ShopCard
                products = {products}
            />
        </div>
    )
}