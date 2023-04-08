import Header from "../header/Header.component";
import { Footer } from '../footer';


const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;