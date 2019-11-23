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
              Hello there, <br />
              <br />
              My name is Stephen and I am trying to make a career change into
              IT. I have spent the last ten months studying and creating
              projects with the programming language JavaScript. For most of
              that time, I have focused on creating web applications using the
              JavaScript framework React and the runtime Node.js. I have spent
              the remaining time creating desktop and mobile applications with
              similar technologies. Developing all of these projects has been
              quite the learning experience for me and I want to continue
              learning as much as I can. To see the work I've done so far,
              please check out the projects tab on this website.
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
