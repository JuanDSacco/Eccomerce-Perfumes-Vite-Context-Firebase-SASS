import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data}) => {

return (
    <div>
        <div className='divItemList'>
            {data.map((data) => (
                <Item data={data} key={data.id}/>
            ))}
        </div>
    </div>

)
}

export default ItemList
