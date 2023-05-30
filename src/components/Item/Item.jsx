import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


const Item = ({data}) => {

    const {mode} = useCartContext();

    return (
        <>
        {
            mode === false ?
            <div className='itemContainer'>
                <h1 className='h1Item'>{data.titulo}</h1>
                <img className='imgItem' src={data.imagen} alt='perfume, imagen extraida de firebase'/>
                <div className='divBtnItem'>
                    <Link to={`/productos/${data.id}`}><Button name='Ver más'/></Link>
                </div>
            </div>
            :
            <div className='itemContainerDark'>
                <h1 className='h1ItemDark'>{data.titulo}</h1>
                <img className='imgItem' src={data.imagen} alt='perfume, imagen extraida de firebase'/>
                <div className='divBtnItemDark'>
                    <Link to={`/productos/${data.id}`}><Button name='Ver más'/></Link>
                </div>
            </div>
        }
        </>
    )
}

export default Item
