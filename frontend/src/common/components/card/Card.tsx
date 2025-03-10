import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

interface CardHeaderProps {
  title: string;
}

Card.CardHeader = ({ title, ...props }: CardHeaderProps) => {
  return (
    <div {...props} className={styles["card-header"]}>
      <h2 className="poweredge-color-primary">{title}</h2>
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
}

Card.CardFooter = ({ children, ...props }: CardFooterProps) => {
  return (
    <div {...props} className={styles["card-footer"]}>
      {children}
    </div>
  );
};
