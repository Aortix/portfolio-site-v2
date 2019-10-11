import React from "react";
import styles from "./MyInformation.module.css";

export default function MyInformation(): React.ReactElement {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.links}>
        <a
          href="https://github.com/Aortix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-riding-564ab36b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      <h1 className={styles.nameText}>Stephen Riding</h1>
      <p className={styles.contactText}>stephenriding12@gmail.com</p>
      <p className={styles.contactText}>858-633-3487</p>
    </div>
  );
}
