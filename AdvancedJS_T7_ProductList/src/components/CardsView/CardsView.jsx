import {ShopCard} from '../ShopCard/ShopCard'
import { ShopItem } from '../ShopItem/ShopItem'
import './CardsView.css'

export default function CardsView({products}) {
    return (
        <div className='productContainer'>
            <ShopCard
                products = {products}
            />
        </div>
    )
}