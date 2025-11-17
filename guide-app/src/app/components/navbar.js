import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#fafafa', borderBottom: '1px solid #ddd' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/subjects">Subjects</Link> |{' '}
      <Link href="/login">Login</Link>
    </nav>
  );
}
