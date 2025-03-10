import { Card } from "../../common/components/card/Card";
import styles from "./CardGrid.module.css";
import { ProductModel } from "../../common/models/product-model";

interface CardGridProps {
  products: ProductModel[];
}

export const CardGrid = ({ products }: CardGridProps) => {
  return (
    <section className={styles["card-grid"]}>
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <Card.CardHeader title={product.name} />
          </Card>
        );
      })}
    </section>
  );
};
