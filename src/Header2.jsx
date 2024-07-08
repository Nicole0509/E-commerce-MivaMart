import React from 'react';
import './App.css';

const Header2 = ({ label }) => {
  return (
    <header className="header">
      <div>
        <label>
          { label }
        </label>
      </div>
      
      <div className="search-bar flex justify-between items-center">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" className='focus:outline-none' />
      </div>
    </header>
  );
};

// Header2.propTypes = {
//   label: PropTypes.string.isRequired,
// };


export default Header2;
