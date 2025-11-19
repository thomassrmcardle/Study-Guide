import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <a href="/">Home</a> |{' '}
        <a href="/subjects">Subjects</a> |{' '}
        <a chref="/about">About Us</a>
        <div className='spacer'></div>
        <a className='button' href="/signup">Sign Up</a>
        <a href="/login">Login</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}
