import { useState, useEffect } from "react";
import { db } from "../../Config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsCollection = collection(db, 'products');
                let querySnapshot;

                if (categoryId) {
                    const categoryQuery = query(productsCollection, where('category', '==', categoryId));
                    querySnapshot = await getDocs(categoryQuery);
                } else {
                    querySnapshot = await getDocs(productsCollection);
                }

                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
