import React from "react";
import styles from "./AboutMe.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const AboutMe = React.memo((props: AppProps) => {
  if (props.isVisible === "ABOUT ME") {
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
              <i className="fas fa-running fa-2x"></i>
              <span className={styles.titleText}>About Me</span>
            </div>
            <p className={styles.paragraphText}>
              Hello, <br />
              <br />
              All my personal projects related to software development will be
              posted on here.
            </p>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default AboutMe;
