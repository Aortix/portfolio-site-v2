import React from "react";
import styles from "./MyInformation.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  landingPageInProp: boolean;
}

export default function MyInformation(props: AppProps): React.ReactElement {
  return (
    <Transition in={props.landingPageInProp} timeout={easeInOut.duration}>
      {state => (
        <div
          className={styles.mainContainer}
          style={{
            ...easeInOut.defaultStyle,
            ...easeInOut.transitionStyles[state]
          }}
        >
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
          <div className={styles.switch}>
            <i className="fas fa-adjust fa-lg"></i>
          </div>
          <h1 className={styles.nameText}>Stephen Riding</h1>
          <p className={styles.contactText}>stephenriding12@gmail.com</p>
          <p className={styles.contactText}>858-633-3487</p>
        </div>
      )}
    </Transition>
  );
}
