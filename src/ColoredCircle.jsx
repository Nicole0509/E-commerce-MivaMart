import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const ColoredCircle = ({ color }) => {
  return (
    <div className="colored-circle" style={{ backgroundColor: color }}></div>
  );
};

ColoredCircle.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColoredCircle;
