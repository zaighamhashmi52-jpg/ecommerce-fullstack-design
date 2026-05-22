import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1rem',
    transition: 'box-shadow 0.2s',
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.25rem',
    marginBottom: '0.75rem',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  };

  const priceStyle = {
    color: '#666',
    marginBottom: '0.5rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
  };

  const buttonStyle = {
    flex: 1,
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#22c55e',
  };

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imgStyle} />
      <h3 style={titleStyle}>{product.name}</h3>
      <p style={priceStyle}>${product.price}</p>
      <div style={buttonContainerStyle}>
        <Link to={`/product/${product.id}`} style={buttonStyle}>View</Link>
        <button onClick={() => addToCart(product)} style={addButtonStyle}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
