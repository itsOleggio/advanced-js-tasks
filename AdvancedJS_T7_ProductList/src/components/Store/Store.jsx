import CardsView from '../CardsView/CardsView'
import ListView from '../ListView/ListView'
import products from '../../constant/products'
import IconSwitch from '../IconSwitch/IconSwitch'
import { useState } from 'react'

export default function Store() {

    const [show, setShow] = useState('cards');

    const handleChangeShow = () => {
        setShow(curState => curState === 'cards' ? 'list' : 'cards');
    }

    return (
        <>
            <IconSwitch
                icon={show === 'cards' ? 'card' : 'list'}
                onSwitch={handleChangeShow}
            />

            {
                show === 'cards' ? <CardsView products={products} /> : <ListView products={products} />
            }

        </>
    )
}