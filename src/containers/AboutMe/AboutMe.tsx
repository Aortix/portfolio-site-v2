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
              My name is Stephen and I am currently teaching myself software
              development using different online resources and by creating
              personal projects. All of my projects can be found on this site
              and the code is usually viewable on my GitHub. The reason I have
              been taking the time to learn about this is so that one day,
              whether it’s through my career or a side business of mine, I can
              have some work doing software development. My highest education
              right now is in chemistry and while I certainly still enjoy
              chemistry and science in general, I want this new interest to
              coexist with them if possible.
              <br />
              <br />
              Thank you for reading.
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
