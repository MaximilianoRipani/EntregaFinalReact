import React, { useState, useEffect } from 'react';
import { db } from '../../Config/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import './ItemCount.css';

const ItemCount = ({ initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        const totalStock = Array.from(productsSnapshot.docs)
          .map(doc => doc.data().stock)
          .reduce((acc, currentStock) => acc + currentStock, 0);

        setStock(totalStock);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStock();
  }, []);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
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
