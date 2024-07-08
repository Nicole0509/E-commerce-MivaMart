import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const DiscountComponent = ({ text , price }) => {
  return (
    <div className="DiscountComponent">
      <p><span className="DiscountComponentText">{text}</span> <span className="DiscountComponentPrice">$</span> <span className="DiscountComponentPrice">{price.toFixed(2)}</span></p>
    </div>
  );
};

DiscountComponent.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DiscountComponent;
