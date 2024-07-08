import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ProductInfo = ({ price, category, pieces }) => {
  return (
    <div>
      <h3 className="product-price">${price.toFixed(2)}</h3>
      <p className="product-category">{category}</p>
      <p className="product-pieces">
        <i className="fa-solid fa-tag"></i> {pieces} available pieces
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  pieces: PropTypes.number.isRequired,
};

export default ProductInfo;