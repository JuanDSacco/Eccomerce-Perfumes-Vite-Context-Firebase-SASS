import React from 'react'
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {

    const { addProduct } = useCartContext();

    const onAdd = ( contador ) => {
        addProduct(data,contador)
    }

    return (
        <div className='itemDetailPrincipal'>
            <div className='divCardDetail'>
                <Card data={data}/>
            </div>
            <div >
                <ItemCount data={data} onAdd={onAdd}/>
            </div>
            <div>
                <Link to={'/productos'}><Button name='Volver a productos'/></Link>
                <Link to={'/cart'}><Button name='Ir al Carrito'/></Link>
            </div>
        </div>
    )
}

export default ItemDetail
