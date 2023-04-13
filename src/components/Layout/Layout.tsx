import Header from '../Header/Header.component';
import { Footer } from '../footer';
import style from './layout.module.scss'
import Advertise from '../advertise/advertise.component';

const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      <div className={style.layout_main}>
        <div className='container'>
        {children}
        </div>
      </div>
      <Advertise />
      <Footer />
    </>
  );
};

export default Layout;