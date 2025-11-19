import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <a href="/">Home</a> |{' '}
      <a href="/subjects">Subjects</a> |{' '}
      <a chref="/about">About Us</a>
      <div className='spacer'></div>
      <a className='button' href="/signup">Sign Up</a>
      <a href="/login">Login</a>
    </nav>
  );
}
