import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/subjects">Subjects</Link> |{' '}
      <Link href="/about">About Us</Link>
      <div className='spacer'></div>
      <Link className='button' href="/signup">Sign Up</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
