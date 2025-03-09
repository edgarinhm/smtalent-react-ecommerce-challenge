import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main id={"page-content"} role="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
