import { Card } from "../../common/components/card/Card";
import styles from "./CardGrid.module.css";
import { ProductModel } from "../../common/models/product-model";
import currency from "currency.js";
import { Button } from "@poweredge/smtalent-challenge-lib";
import { Link } from "react-router-dom";
import useCartStorage from "../../common/state-management/cart-storage";

interface CardGridProps {
  products: ProductModel[];
}

export const CardGrid = ({ products }: CardGridProps) => {
  const { addProduct } = useCartStorage();
  return (
    <section className={styles["card-container"]}>
      <div className={styles["card-grid"]}>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <Card.CardHeader title={product.name} />
              <Link
                className={styles["thumbail"]}
                to={`${product.name
                  .trim()
                  .toLocaleLowerCase()
                  .replaceAll(" ", "-")}/p`}
              >
                <img
                  loading="lazy"
                  src={product.image}
                  alt={`${product.category} ${product.name}`}
                />
              </Link>
              <div className={styles["content"]}>
                <span>{currency(product.price).format()}</span>
              </div>
              <Card.CardFooter>
                <Button
                  style={{ textTransform: "inherit" }}
                  variant="floating-action"
                  size="small"
                  className={`poweredge-color-primary ${styles["card-footer-action-buttons"]}`}
                  onClick={() => addProduct(product)}
                >
                  {"Add to cart"}
                </Button>
              </Card.CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
