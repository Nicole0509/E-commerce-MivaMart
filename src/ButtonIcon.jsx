import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const ButtonIcon = ({ label, icon }) => {
  return (
    <button className="custom-button">
      {label} {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default ButtonIcon;
