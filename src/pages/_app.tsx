import Layout from "@/components/Layout/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
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
