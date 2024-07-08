import PropTypes from 'prop-types';
import React from 'react';
import './App.css'

const ImageComponent = ({ imageUrl, altText, width,height }) => {
  return (
    <div className="ImageComponent">
      <img src={imageUrl} alt={altText}/>
    </div>
  );
}

ImageComponent.prototype = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

ImageComponent.defaulProps = {
  width: '100%',
  height: '100%'
}

export default ImageComponent;