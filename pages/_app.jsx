import React from 'react';
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar";

import Layout from '../components/Layout';

import '../styles/bootstrap.min.css';
import '../styles/styles.css';

export default function App({ Component, pageProps}) {
  const router = useRouter();
  return (
    router.asPath === "/TcxFtCBsnRP8uSb6kkHu4ejz4fgWRAbkvuvGyLwaz2BpkXfaQBuMPfx7n2KkDoRyNR7rnodtYKuMSQKsfwNfCwXakhJTTJJmdFrEdz9KVDHdfjK2pRdpyG4CC2BuR5oJ" 
    || router.asPath === "/LqcVNArXSBKHKn7VV9ENwpxSaKcJzSsk9fgGoFpoQs4Wco8eLXyM2eHvW5NcgkAz"?(
      <Component {...pageProps} key={router.asPath}/>
    ):(
      <Layout >
          <NextNProgress />
          <Component {...pageProps} key={router.asPath}/>
      </Layout>
    )
  );
}
