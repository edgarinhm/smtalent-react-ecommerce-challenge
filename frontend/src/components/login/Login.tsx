import { Link } from "react-router-dom";
import { homeRoute } from "../../Router";
import styles from "./Login.module.css";

export const Login = () => {
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
        <form autoComplete="off">
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="text" id="email" name="email" required />
          <button type="submit" className={`${styles["login-button"]}`}>
            Continue
          </button>
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
        <button
          className={`${styles["help-link"]}`}
          onClick={() => alert("Help clicked")}
        >
          Need help?
        </button>
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
