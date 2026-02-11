import list from './../../assets/list.png'
import card from './../../assets/card.png'

export default function IconSwitch({ icon, onSwitch }) {



    return (
        <div className='header'>
            <img
                src={icon === 'card' ? card : list}
                className='iconSwitch'
                onClick={onSwitch}
            >

            </img>
        </div>
    )
}