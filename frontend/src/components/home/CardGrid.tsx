import { Card } from "../../common/components/card/Card";
import styles from "./CardGrid.module.css";
import { ProductModel } from "../../common/models/product-model";
import currency from "currency.js";
import { Button } from "@poweredge/smtalent-challenge-lib";
import { Link } from "react-router-dom";

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
            <Link
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
            <span>{currency(product.price).format()}</span>
            <Card.CardFooter>
              <Button
                style={{ textTransform: "inherit" }}
                variant="floating-action"
                size="small"
                className={`poweredge-color-primary ${styles["card-footer-action-buttons"]}`}
              >
                {"Add to cart"}
              </Button>
            </Card.CardFooter>
          </Card>
        );
      })}
    </section>
  );
};
