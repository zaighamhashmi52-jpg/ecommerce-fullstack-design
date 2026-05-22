import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    gap: '2rem',
  };

  const itemStyle = {
    borderBottom: '1px solid #ddd',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const summaryStyle = {
    backgroundColor: '#f3f4f6',
    padding: '1.5rem',
    borderRadius: '0.25rem',
    height: 'fit-content',
  };

  const totalStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const checkoutButtonStyle = {
    width: '100%',
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.25rem',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  if (cart.length === 0) {
    return (
      <div style={{ ...containerStyle, textAlign: 'center' }}>
        <h1 style={titleStyle}>Your Cart is Empty</h1>
        <Link to="/" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none', display: 'inline-block' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Shopping Cart</h1>
      <div style={gridStyle}>
        <div>
          {cart.map(item => (
            <div key={item.id} style={itemStyle}>
              <div>
                <h3 style={{ fontWeight: 'bold' }}>{item.name}</h3>
                <p style={{ color: '#666' }}>${item.price}</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '60px', border: '1px solid #ddd', padding: '0.25rem' }}
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={summaryStyle}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Order Summary</h2>
          <div style={totalStyle}>Total: ${getTotalPrice().toFixed(2)}</div>
          <button style={checkoutButtonStyle}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
