import './App.css'
import React from 'react';
import PropTypes from 'prop-types';
import ImageComponent from './ImageComponent';
import ColoredCircle from './ColoredCircle';
import ProductInfo from './ProductInfo';
import { useCartContext } from './CartContext';

const ProductCard = ({ imageUrl, altText, price, category, pieces, colors }) => {
  const { cart, addProductToCart } = useCartContext()
  return (
    <div className='product-card'>
      <div>
        <ImageComponent imageUrl={imageUrl} altText={altText} />
      </div>
      <div className="productInfoContainer">
        <div className='InfoContainer'>
          <ProductInfo price={price} category={category} pieces={pieces} />
          <div className="product-colors">
            {colors.map((color, index) => (
              <ColoredCircle key={index} color={color} />
            ))}
          </div>
        </div>
        <div className='ProductIcons'>
          <ul>
            <li>
              <a href='#'><i class="fa-solid fa-bag-shopping"></i></a>
            </li>
            <li>
              <a onClick={()=>addProductToCart({price, imageUrl, category, pieces, colors, quantity: 1, total: price})} className='cursor-pointer'><i class="fa-solid fa-cart-shopping"></i></a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
};

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  pieces: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCard;
