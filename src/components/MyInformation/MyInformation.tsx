import React from "react";
import styles from "./MyInformation.module.css";

export default function MyInformation(): React.ReactElement {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.links}>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin"></i>
      </div>
      <h1>Stephen Riding</h1>
      <p className={styles.contactText}>stephenriding12@gmail.com</p>
      <p className={styles.contactText}>858-633-3487</p>
    </div>
  );
}
