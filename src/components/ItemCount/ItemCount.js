import './ItemCount.css'
import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';

const ItemCount = ({ initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [stock, setStock] = useState(0); 

  useEffect(() => {
    
    getProducts().then((products) => {
      const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
      setStock(totalStock);
    });
  }, []); 

  const increment = () => {
    console.log('Current Quantity:', quantity);
    console.log('Current Stock:', stock);
  
    if (quantity < stock) {
      setQuantity((prevQuantity) => {
        console.log('Incrementing:', prevQuantity + 1);
        return prevQuantity + 1;
      });
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className='Button' onClick={decrement}>
          -
        </button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Button' onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
