import React from 'react'
import Item from '../Item/Item'
import { useCartContext } from '../../context/CartContext'

const ItemList = ({data}) => {

    const {mode} = useCartContext();

return (
    <div>
        {
            mode === false ?
        <div className='divItemList'>
            {data.map((data) => (
                <Item data={data} key={data.id}/>
            ))}
        </div>
        :
        <div className='divItemListDark'>
            {data.map((data) => (
                <Item data={data} key={data.id}/>
            ))}
        </div>
        }
    </div>

)
}

export default ItemList
