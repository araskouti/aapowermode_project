import React, { useEffect } from 'react';

function Navbar() {
  return (
    <>
      <div className='header'>
        <div className='inner-header'>
          <div className='logo-container'></div>
          <ul className='nav'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
          <ul className='sec-nav'>
            <li><a href='#'>Book an Appointment</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
