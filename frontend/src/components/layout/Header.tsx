import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import useCartStorage from "../../common/state-management/cart-storage";

export const Header = () => {
  const { getCartCount } = useCartStorage();
  return (
    <header
      id={"navbar-main"}
      role="banner"
      className={`${styles["nav-flex"]}`}
    >
      <div id="navbar" className={`${styles["navbar"]}`}>
        <div id="nav-belt" className={`${styles["nav-belt"]}`}>
          <div className={`${styles["nav-left"]}`}>
            <div id="nav-logo" className={`${styles["nav-logo"]}`}>
              <NavLink
                to={"/"}
                className={`${styles["nav-logo-link"]} ${styles["nav-progressive-attribute"]}`}
                aria-label="Poweredge"
              >
                <span
                  className={`${styles["nav-sprite"]} ${styles["nav-logo-base"]}`}
                ></span>
              </NavLink>
            </div>
          </div>
          <div className={styles["nav-fill"]}></div>
          <div className={`${styles["nav-right"]}`}>
            <div className={`${styles["nav-tools"]}`}>
              <NavLink
                to={"/"}
                className={`${styles["nav-a"]} ${styles["nav-a-2"]} ${styles["nav-link-accountList"]}`}
                aria-label="Poweredge"
              >
                <div className={`${styles["nav-line-1-container"]}`}>
                  <span
                    className={`${styles["nav-line-1"]} ${styles["nav-link-accountList-nav-line-1"]}`}
                  >
                    {"Hello, sign in"}
                  </span>
                </div>
                <span className={`${styles["nav-line-2"]}`}>
                  {"Account  Lists"}
                  <span className="nav-icon nav-arrow"></span>
                </span>
              </NavLink>
              <NavLink
                to={"/cart"}
                className={`${styles["nav-a"]} ${styles["nav-a-2"]} ${styles["nav-cart"]}`}
                aria-label={`${getCartCount()} items in cart`}
              >
                <div className={`${styles["nav-cart-count-container"]}`}>
                  <span
                    className={`${styles["nav-cart-count"]} ${styles["nav-cart-0"]}`}
                  >
                    {`${getCartCount()}`}
                  </span>
                  <span
                    className={`${styles["nav-cart-icon"]} ${styles["nav-sprite"]}`}
                  ></span>
                </div>
                <div className={`${styles["nav-cart-text-container"]}`}>
                  <span className={`${styles["nav-line-1"]}`}> </span>
                  <span className={`${styles["nav-line-2"]}`}>
                    {"Cart"}
                    <span
                      className={`${styles["nav-icon"]} ${styles["nav-arrow"]}`}
                    ></span>
                  </span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
