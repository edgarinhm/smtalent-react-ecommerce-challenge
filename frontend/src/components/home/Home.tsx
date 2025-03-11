import { JSX, useEffect } from "react";
import styles from "./Home.module.css";
import { CardGrid } from "./CardGrid";
import { ProductsData } from "../../common/mocks/products-data";
import { CategoryNav } from "./CategoryNav";
import useProductsStorage from "../../common/state-management/products-storage";

export const Home = (): JSX.Element => {
  const { products, setProductsState } = useProductsStorage();

  useEffect(() => {
    const loadProductsData = () => {
      setProductsState(ProductsData);
    };
    loadProductsData();
  }, [setProductsState]);

  return (
    <div className={styles.home}>
      <h1 className={"clipped"}>Poweredge Ecommerce</h1>
      <CategoryNav products={products} />
      <CardGrid products={products} />
    </div>
  );
};
