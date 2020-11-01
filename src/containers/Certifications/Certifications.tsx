import React from "react";
import styles from "./Certifications.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const Certifications = React.memo((props: AppProps) => {
  if (props.isVisible === "CERTIFICATES") {
    return (
      <Transition in={props.inProp} timeout={easeInOut.duration}>
        {(state) => (
          <div
            className={styles.mainContainer}
            style={{
              ...easeInOut.defaultStyle,
              ...easeInOut.transitionStyles[state],
            }}
          >
            <div className={styles.titleContainer}>
              <i className="fas fa-certificate fa-2x"></i>
              <span className={styles.titleText}>Certifications</span>
            </div>
            <p
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              CompTIA
            </p>
            <div className={styles.courseContainer}>
              <p className={styles.courseTitleText}>Network+</p>
              <div className={styles.courseLinksContainer}>
                <p className={styles.paragraphText}>Completed October 2020</p>
                <a
                  href="https://www.youracclaim.com/badges/53d692e3-9053-406e-a451-b9dc8a46c049"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Badge</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default Certifications;
