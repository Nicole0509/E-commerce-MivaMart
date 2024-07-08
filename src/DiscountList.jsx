import React from 'react';
import PropTypes from 'prop-types';
import DiscountComponent from './DiscountComponent';
import './App.css';

const DiscountList = ({ items }) => {
  return (
    <div className="discount-list">
        {items.map((item,index) => (
          <DiscountComponent key={index} text={item.text}  price={item.price}/>
        ))}
    </div>
  );
};

DiscountList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DiscountList;
