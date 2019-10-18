import React from "react";
import styles from "./AboutMe.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  isVisible: string;
  inProp: boolean;
}

export default function AboutMe(props: AppProps): React.ReactElement {
  if (props.isVisible === "ABOUT ME") {
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
              <i className="fas fa-running fa-2x"></i>
              <span className={styles.titleText}>About Me</span>
            </div>
            <p className={styles.paragraphText}>
              Hello, I am an aspiring developer who has spent the last eight
              months studying and creating projects with JavaScript. For most of
              that time, I have focused on creating web applications with react,
              redux, and node. These technologies were my priority since my main
              goal has been to switch careers and become a web developer. I have
              spent the remaining time creating a desktop and mobile application
              using similar technologies. Developing for these platforms has
              been an interesting experience so far, and one I want to take a
              deeper dive into. <br />
              <br />
              Coding has become a passion of mine during this time.
            </p>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
}
