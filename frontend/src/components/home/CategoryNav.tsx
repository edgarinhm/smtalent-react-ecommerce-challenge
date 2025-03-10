import { useMemo } from "react";
import { ProductModel } from "../../common/models/product-model";
import { Link } from "react-router-dom";
import styles from "./CategoryNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

interface CategoryNavProps {
  products: ProductModel[];
}
export const CategoryNav = ({ products }: CategoryNavProps) => {
  const sortedCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    products.forEach((product) => {
      categoriesSet.add(product.category);
    });
    return [...categoriesSet].sort((a, b) => (a > b ? 1 : -1));
  }, [products]);

  return (
    <div
      className={`${styles["navbar-category"]} ${styles["nav-sprite"]} ${styles["bold-focus-hover"]}`}
    >
      <div className={styles["nav-left"]}>
        <Link to={"/#"} className={styles["nav-hamburger-menu"]}>
          <GiHamburgerMenu className={styles["hm-icon"]} />
          <span className={styles["hm-icon-label"]}>{"All Categories"}</span>
        </Link>
      </div>
      <div className={styles["nav-fill"]}>
        <div className={styles["nav-xshop-container"]}>
          <nav className={styles["nav-xshop"]}>
            <ul className={styles["nav-ul"]}>
              {sortedCategories.slice(0, 5).map((category) => {
                const product = products.find(
                  (product) => product.category === category
                );
                return (
                  <li key={category} className={`${styles["nav-li"]}`}>
                    <Link
                      className={styles["nav-a"]}
                      to={`/${product?.category
                        .trim()
                        .replaceAll(" ", "")
                        .toLocaleLowerCase()}`}
                    >
                      <span>{category}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
