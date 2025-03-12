import { Link, useNavigate } from "react-router-dom";
import { homeRoute } from "../../Router";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { ProductsData } from "../../common/mocks/products-data";
import { Button } from "@poweredge/smtalent-challenge-lib";

export const Login = () => {
  const [email, setEmail] = useState<string>();
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!email) return;
    localStorage.setItem("products", JSON.stringify(ProductsData));
    localStorage.setItem("user", email);
    navigate(homeRoute.path);
  };

  return (
    <div className={`${styles["login-container"]}`}>
      <Link to={homeRoute.path}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className={`${styles["login-logo"]}`}
        />
      </Link>
      <div className={`${styles["login-box"]}`}>
        <h1>Sign in</h1>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
            required
          />
          {submitted && !email && (
            <div className="a-box-inner a-alert-container">
              <i className="a-icon a-icon-alert"></i>
              <div className="a-alert-content">
                Enter your email or mobile phone number
              </div>
            </div>
          )}
          <Button
            style={{ textTransform: "none", boxShadow: "none" }}
            type="submit"
            variant="floating-action"
            size="small"
            className={`poweredge-color-primary ${styles["login-button"]} ${styles["button-span12"]}`}
          >
            Continue
          </Button>
        </form>
        <p>
          {`By continuing, you agree to Amazon's `}
          <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088">
            Conditions of Use
          </a>
          {" and "}
          <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496">
            Privacy Notice
          </a>
          {". "}
        </p>
        <Button
          style={{ textTransform: "none", boxShadow: "none" }}
          variant="floating-action"
          size="small"
          className={`poweredge-button-text ${styles["help-link"]}  ${styles["button-span12"]}`}
          onClick={() => alert("Help clicked")}
        >
          Need help?
        </Button>
      </div>
      <div className={`${styles["login-footer"]}`}>
        <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508088">
          Conditions of Use
        </a>
        <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496">
          Privacy Notice
        </a>
        <a href="https://www.amazon.com/help">Help</a>
      </div>
    </div>
  );
};
