import { JSX, useEffect, useState } from "react";
import styles from "./Home.module.css";
import { CardGrid } from "./CardGrid";
import { ProductsData } from "../../common/mocks/products-data";
import { ProductModel } from "../../common/models/product-model";
import { CategoryNav } from "./CategoryNav";

export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    const loadProductsData = () => {
      setProducts(ProductsData);
    };
    loadProductsData();
  }, []);

  return (
    <div className={styles.home}>
      <h1 className={"clipped"}>Poweredge Ecommerce</h1>
      <CategoryNav products={products} />
      <CardGrid products={products} />
    </div>
  );
};
