import React from 'react';
import Link from 'next/link';

const NotFound = () => (
  <>
  <div className='text-center m-5 p-5'>
    <h1>500 - Internal Server Error!</h1>
    <p>Strona napotkała wewnętrzny problem.</p>
    <img src="https://cdn.7tv.app/emote/6287c2ca6d9cd2d1f31b5e7d/4x" alt="gigachad" /><br/><br/>
    <Link href="/">
      <a>
        Powrót
      </a>
    </Link>
  </div>
  </>
);

export default NotFound;