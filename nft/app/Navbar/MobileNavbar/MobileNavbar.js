'use client'

import React from 'react'
import './MobileNavbar.css'
import { useState } from 'react';

function MobileNavbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
  return (
    <div>
      <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Why Us
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Market 
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                FAQ
              </a>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar