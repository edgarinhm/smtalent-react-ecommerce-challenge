import { Link } from "react-router-dom";
import { homeRoute } from "../../Router";
import { CSSProperties } from "react";

export const NotFound = () => {
  const styles: CSSProperties = {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 0,
    marginRight: 0,
  };

  return (
    <div style={styles}>
      <Link to={homeRoute.path}>
        <img
          alt="page not found"
          loading="lazy"
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
        />
      </Link>
    </div>
  );
};
