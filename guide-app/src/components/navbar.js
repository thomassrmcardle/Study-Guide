import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link className='link' href="/">Home</Link> |{' '}
      <Link className='link' href="/subjects">Subjects</Link> |{' '}
      <Link className='link' href="/about">About Us</Link>
      <div className='spacer'></div>
      <Link className='button' href="/signup">Sign Up</Link>
      <Link className='link' href="/login">Login</Link>
    </nav>
  );
}
