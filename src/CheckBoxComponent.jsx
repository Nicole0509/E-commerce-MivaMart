import './App.css'
import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxComponent = ({ label, onChange }) =>{
  return (
    <label className='checkBoxComponent'>
      <input type='checkbox' onClick={onChange}/>
      {label}
    </label>
  );
};

CheckBoxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

CheckBoxComponent.defaultProps = {
  onClick: () => {},
};

export default CheckBoxComponent;
