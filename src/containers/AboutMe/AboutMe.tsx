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
              Hello there, <br />
              <br />
              My name is Stephen and I am trying to transition to a career in
              IT. My projects and certifications will be posted here. Source
              code will available on GitHub.
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
