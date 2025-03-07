import { Button } from "@poweredge/smtalent-challenge-lib";
import { JSX } from "react";

export const Home = (): JSX.Element => {
  return (
    <div>
      <h2>Poweredge Ecommerce</h2>
      <span>{"from AWS EC2 x7"}</span>
      <Button variant="outlined">Login</Button>
    </div>
  );
};
