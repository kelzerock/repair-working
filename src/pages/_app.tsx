import Layout from "@/components/Layout/Layout";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import HeadersInfo from "@/components/headersInfo/headersInfo";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TF3HTVB" });
  }, []);

  return (
    <>
      <Layout>
        <HeadersInfo />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}


