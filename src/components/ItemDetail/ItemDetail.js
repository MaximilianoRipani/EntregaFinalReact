import React, { useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { db } from '../../Config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price }) => {
  const [stock, setStock] = useState(0);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const productRef = doc(db, 'products', id);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();

          if (productData && typeof productData.stock === 'number') {
            setStock(productData.stock);
          } else {
            console.error('La propiedad stock no es del tipo esperado.');
          }
        } else {
          console.error('El producto no existe en la base de datos.');
        }
      } catch (error) {
        console.error('Error al obtener el stock del producto:', error.message);
      }
    };

    fetchStock();
  }, [id]);

  const handleAddToCart = (quantity) => {
    setQuantityAdded(quantity);
    addItem({ id, name, price, quantity, img });
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {description}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="option">
            <button className='Button'>Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
