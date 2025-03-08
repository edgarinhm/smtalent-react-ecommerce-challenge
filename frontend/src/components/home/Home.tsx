import { Button } from "@poweredge/smtalent-challenge-lib";
import { JSX } from "react";
import styles from "./Home.module.css";

export const Home = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <h1 className={"clipped"}>Poweredge Ecommerce</h1>
      <span>{"from AWS EC2 x7"}</span>
      <Button variant="outlined">Login</Button>
    </div>
  );
};
