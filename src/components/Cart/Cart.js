import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <div className="Cart">
      <h1>Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.name} className="CartItemImg" />
                <p>{item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>

          <p>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>

          <Link to="/checkout">
            <button>Comprar</button>
          </Link>

          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
