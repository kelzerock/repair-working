import Header from "../header/Header.component"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;