import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!itemId) {
                    console.error('itemId no está definido');
                    return;
                }

                const productRef = doc(db, 'products', itemId);
                const productSnapshot = await getDoc(productRef);

                if (productSnapshot.exists()) {
                    const productData = { id: productSnapshot.id, ...productSnapshot.data() };
                    setProduct(productData);
                } else {
                    console.error('El producto ya no existe');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            {product ? <ItemDetail {...product} /> : <p>Ya te lo traigo...</p>}
        </div>
    );
};

export default ItemDetailContainer;
