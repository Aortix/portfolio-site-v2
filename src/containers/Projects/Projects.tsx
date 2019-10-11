import React from "react";
import styles from "./Projects.module.css";

interface AppProps {
  isVisible: string;
}

export default function Projects(props: AppProps) {
  if (props.isVisible === "PROJECTS") {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <i className="fas fa-cube fa-2x"></i>
          <span className={styles.titleText}>Projects</span>
        </div>
        <h3 className={styles.subTitleText}>Web Development</h3>
        <h3 className={styles.subTitleText}>Mobile Development</h3>
        <h3 className={styles.subTitleText}>Desktop Development</h3>
      </div>
    );
  } else {
    return null;
  }
}
