import Header from '../Header/Header.component';
import { Footer } from '../footer';
import style from './layout.module.scss'

const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <div className={style.layout_main}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;