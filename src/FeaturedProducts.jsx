import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './App.css';

const FeaturedProducts = ({ rows }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      imageUrl: 'images/hero2.jpg',
      altText: 'Standard pedestal bowl',
      price: 450.00,
      category: "Standard pedestal bowl",
      pieces: 55,
      colors: ['#F5F5F5', '#0E4947', '#FFE27B'],
    },
    {
      imageUrl: 'images/hero3.jpg',
      altText: '3-piece Calmaria set',
      price: 250.00,
      category: '3-piece Calmaria set',
      pieces: 12,
      colors: ['#F5F5F5', '#771F96'],
    },
    {
      imageUrl: 'images/hero4.jpg',
      altText: 'Flat clay barry',
      price: 50.00,
      category: "Flat clay barry",
      pieces: 55,
      colors: ['#F5F5F5', '#0E605B', '#FFE27B'],
    },
    {
      imageUrl: 'images/hero5.jpg',
      altText: 'Deep cantu bowl',
      price: 80.00,
      category: "Deep cantu bowl",
      pieces: 5,
      colors: ['#150707', '#D75252', '#D7FCFC'],
    },
    {
      imageUrl: 'images/hero6.jpg',
      altText: 'Piecer bowl',
      price: 100.00,
      category: "Piecer bowl",
      pieces: 7,
      colors: ['#AE6FFF', '#746AED', '#A14E11'],
    },
    {
      imageUrl: 'images/hero7.jpg',
      altText: 'Tender petals',
      price: 25.00,
      category: "Tender petals",
      pieces: 32,
      colors: ['#F5F5F5', '#0E605B', '#A91688'],
    },
    {
      imageUrl: 'images/hero8.jpg',
      altText: 'Sensei ceramic',
      price: 60.00,
      category: "Sensei ceramic",
      pieces: 35,
      colors: [ '#0E605B', '#CD651A'],
    },
    {
      imageUrl: 'images/hero9.jpg',
      altText: 'Melon candy',
      price: 75.00,
      category: "Melon candy",
      pieces: 75,
      colors: [ '#150707', '#D75252', '#D7FCFC'],
    },
    {
      imageUrl: 'images/hero10.jpg',
      altText: 'Standard pedestal bowl',
      price: 450.00,
      category: "Standard pedestal bowl",
      pieces: 55,
      colors: [ '#F5F5F5', '#0E605B','#D7FCFC'],
    },
    {
      imageUrl: 'images/hero11.jpg',
      altText: 'Standard pedestal bowl',
      price: 450.00,
      category: "Standard pedestal bowl",
      pieces: 55,
      colors: [ '#F5F5F5', '#0E605B','#D7FCFC'],
    },
    {
      imageUrl: 'images/hero12.jpg',
      altText: 'Standard pedestal bowl',
      price: 450.00,
      category: "Standard pedestal bowl",
      pieces: 55,
      colors: [ '#F5F5F5', '#0E605B','#D7FCFC'],
    },
    {
      imageUrl: 'images/hero13.jpg',
      altText: 'Deep cantu bowl',
      price: 80.00,
      category: "Deep cantu bowl",
      pieces: 5,
      colors: ['#150707', '#D75252', '#D7FCFC'],
    },
    {
      imageUrl: 'images/hero14.jpg',
      altText: 'Piecer bowl',
      price: 100.00,
      category: "Piecer bowl",
      pieces: 7,
      colors: ['#AE6FFF', '#746AED', '#A14E11'],
    },
    {
      imageUrl: 'images/hero15.jpg',
      altText: 'Tender petals',
      price: 25.00,
      category: "Tender petals",
      pieces: 32,
      colors: ['#F5F5F5', '#0E605B', '#A91688'],
    },
    {
      imageUrl: 'images/hero16.jpg',
      altText: 'Sensei ceramic',
      price: 60.00,
      category: "Sensei ceramic",
      pieces: 35,
      colors: [ '#0E605B', '#CD651A'],
    },
    {
      imageUrl: 'images/hero17.jpg',
      altText: 'Melon candy',
      price: 75.00,
      category: "Melon candy",
      pieces: 75,
      colors: [ '#150707', '#D75252', '#D7FCFC'],
    },
  ];

  const productsPerPage = rows * 4;
  const paginatedProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - productsPerPage >= 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };

  return (
    <div className="featured-products">
      {paginatedProducts.map((product, index) => (
        <ProductCard
          key={index}
          imageUrl={product.imageUrl}
          altText={product.altText}
          price={product.price}
          category={product.category}
          pieces={product.pieces}
          colors={product.colors}
        />
      ))}
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex + productsPerPage >= products.length}>
          Next
        </button>
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {
  rows: PropTypes.number.isRequired,
};

export default FeaturedProducts;
