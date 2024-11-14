import React from 'react';
import Link from '@docusaurus/Link';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#1a73e8', padding: '1rem 2rem' }}>
      <Link to="/" style={{ color: '#ffffff', fontSize: '1.2rem', marginRight: '1rem' }}>
        Home
      </Link>
      <Link to="/docs/about" style={{ color: '#ffffff', marginRight: '1rem' }}>
        About
      </Link>
      <Link to="/docs/contact" style={{ color: '#ffffff' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
