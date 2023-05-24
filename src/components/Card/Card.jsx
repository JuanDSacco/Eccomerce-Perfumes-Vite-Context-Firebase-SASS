import React from 'react'

const Card = ({data}) => {
    return(
        <div>
            <h1 className='h1Card'>{data.titulo}</h1>
            <img className='imgCard' src={data.imagen} alt='foto-perfume'/>
        </div>
    )
}

export default Card;
