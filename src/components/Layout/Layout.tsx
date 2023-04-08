import { AppProps } from "next/app";
import Header from "../header/Header.component"

const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;