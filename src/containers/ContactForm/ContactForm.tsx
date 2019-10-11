import React from "react";
import styles from "./ContactForm.module.css";

interface AppProps {
  isVisible: string;
}

export default function ContactForm(props: AppProps): React.ReactElement {
  if (props.isVisible === "CONTACT") {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <i className="far fa-id-card fa-2x"></i>
          <span className={styles.titleText}>Contact Form</span>
        </div>
        <form>
          <label>
            Name
            <input type="text" required></input>
          </label>
          <label>
            Company
            <input type="text" required></input>
          </label>
          <label>
            Contact Email
            <input type="text" required></input>
          </label>
          <label>
            Phone (Optional)
            <input type="text"></input>
          </label>
          <label>
            Message
            <input type="text" required></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return null;
  }
}
