import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import carro from './assets/carro32px.png';
import './CartWidget.css'; 
const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidget'>
            <img className='CartImg' src={carro} alt='cart-widget' />
            {totalQuantity > 0 && <span className='CartQuantity'>{totalQuantity}</span>}
        </Link>
    );
}

export default CartWidget;
