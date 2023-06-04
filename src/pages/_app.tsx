import Layout from "@/components/Layout/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
      TagManager.initialize({ gtmId: 'GTM-TF3HTVB' });
  }, []);

  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
