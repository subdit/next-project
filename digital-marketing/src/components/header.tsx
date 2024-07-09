import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/performance'>Performance</Link>
        <Link href='/reliability'>Reliability</Link>
        <Link href='/scale'>Scale</Link>
      </nav>
    </div>
  );
}
