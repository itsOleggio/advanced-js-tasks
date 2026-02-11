import { ShopItem } from '../ShopItem/ShopItem'
import './ListView.css'

export default function ListView({products}){

    return(
        <div className='listContainer'>
            <ShopItem products={products}/>
        </div>
        
    )
}