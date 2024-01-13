import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id }) => {
  const { cart, removeItem } = useContext(CartContext);


  const cartItem = cart.find(item => item.id === id);

  if (!cartItem) {
   
    return <div>No se encontró el artículo en el carrito.</div>;
  }

  const { title, price, quantity } = cartItem;

  return (
    <div className="text-white flex justify-around">
      <h2>{title}</h2>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
