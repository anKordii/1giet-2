import React from 'react';
import Link from 'next/link';

const NotFound = () => (
  <>
  <div className='text-center m-5 p-5'>
    <h1>404 - Nie znaleziono strony!</h1>
    <img src="https://cdn.7tv.app/emote/62ba2122cb8e6bebae27dd5e/4x" alt="ok" /><br/><br/>
    <Link href="/">
      <a>
        Powrót
      </a>
    </Link>
  </div>
  </>
);

export default NotFound;