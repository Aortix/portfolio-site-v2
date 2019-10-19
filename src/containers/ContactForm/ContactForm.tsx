import React from "react";
import styles from "./ContactForm.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  isVisible: string;
  inProp: boolean;
}

const ContactForm = React.memo((props: AppProps) => {
  if (props.isVisible === "CONTACT") {
    return (
      <Transition in={props.inProp} timeout={easeInOut.duration}>
        {state => (
          <div
            className={styles.mainContainer}
            style={{
              ...easeInOut.defaultStyle,
              ...easeInOut.transitionStyles[state]
            }}
          >
            <div className={styles.titleContainer}>
              <i className="far fa-id-card fa-2x"></i>
              <span className={styles.titleText}>Contact Form</span>
            </div>
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required></input>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" required></input>
              <label htmlFor="contact-email">Contact Email</label>
              <input type="email" id="contact-email" name="email" required></input>
              <label htmlFor="phone">Phone (Optional)</label>
              <input type="text" id="phone" name="phone"></input>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={6} name="message" required></textarea>
              <button type="submit" className={styles.formSubmitButton}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default ContactForm;
