import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

import Navigation from './Navigation';
import BackgroundLogo from './BackgroundLogo';
import BackTop from './BackTop';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        key="description"
        name="description"
        content="Myślałeś, że to już koniec? Nie tym razem!"
      />
    
      <meta property="og:description" key="og:description" content="Myślałeś, że to już koniec? Nie tym razem!"></meta>
      <meta property="og:title" key="og:title" content="1GIET 2.0" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" key="twitter:title" content="1GIET 2.0" />
      <meta name="twitter:description" key="twitter:description" content="Myślałeś, że to już koniec? Nie tym razem!"></meta>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@adrian1g420"/>

      <link rel="apple-touch-icon" href="/logo.png" />

      <meta property="og:image" content="/og-default.png" key="og:image"/>
      <meta name="twitter:image" content="/og-default.png" key="twitter:image"/>

      <title key="title">1GIET 2.0</title>
    </Head>
    <main id="app">
      <BackgroundLogo />
      <Navigation />
      <BackTop />
      {children}
      <Footer />
    </main>
    <Script src="/bootstrap/bootstrap.min.js" />
  </>
);

export default Layout;
