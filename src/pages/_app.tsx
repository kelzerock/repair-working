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
    <Head>
      <title>РемТехСервис</title>
      <meta name="keywords" content="ремтехсервис ремонт техники, ремонт стиральные машины, ремонт посудомоечные машины, ремонт варочные панели, ремонт электроплиты, ремонт духовные шкафы,ремонт сушильные машины, УНП 193683932, ООО Кронс Компани" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
