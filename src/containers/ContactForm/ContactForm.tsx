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
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required></input>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" required></input>
          <label htmlFor="contact-email">Contact Email</label>
          <input type="text" id="contact-email" required></input>
          <label htmlFor="phone">Phone (Optional)</label>
          <input type="text" id="phone"></input>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={6} required></textarea>
          <button type="submit" className={styles.formSubmitButton}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return null;
  }
}
