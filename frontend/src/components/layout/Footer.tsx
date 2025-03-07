import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer role="contentinfo" className={`${styles.footer}`}>
      <div
        className={`${styles.navFooterLine} ${styles.navFooterLinkLine} ${styles.navFooterPadItemLine} ${styles.navFooterCopyright}`}
      >
        <ul>
          <li className={`${styles["nav_first"]}`}>
            <a href="/#" className={`${styles["nav_a"]}`}>
              Conditions of Use
            </a>
          </li>
          <li>
            <a href="/#" className={`${styles["nav_a"]}`}>
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="/#" className={`${styles["nav_a"]}`}>
              Consumer Health Data Privacy Disclosure
            </a>
          </li>
          <li>
            <a href="/#" className={`${styles["nav_a"]}`}>
              Your Ads Privacy Choices
            </a>
          </li>
        </ul>
        <span>
          © 2005-{`${new Date().getFullYear()}`},{" "}
          {"Poweredge.com, Inc. or its affiliates"}
        </span>
      </div>
    </footer>
  );
};
