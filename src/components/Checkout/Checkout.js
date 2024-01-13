import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Config/firebase";
import { Link } from "react-router-dom";

import "./Checkout.css";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleConfirm = async (event) => {
    event.preventDefault();

    
    const userData = {
      name,
      phone,
      email,
      timestamp: serverTimestamp(),
    };

    
    const ordersCollection = collection(db, "ventas");
    const newOrderRef = await addDoc(ordersCollection, userData);

    
    setOrderId(newOrderRef.id);
  };

  return (
    <div className="checkout-form-container">
      <div className="checkout-form">
        <h1>Complete con sus datos</h1>
        <form onSubmit={handleConfirm}>
          <div className="form-group">
            <input
              type="text"
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <label>Nombre</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              required
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <label>Teléfono</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <label>Email</label>
          </div>

          <input type="submit" value="Crear compra" />
        </form>

        {}
        {orderId && (
          <div>
            <p>Gracias, este es su número de orden: {orderId}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
