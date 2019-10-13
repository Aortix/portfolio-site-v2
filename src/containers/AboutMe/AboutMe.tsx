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
              that time, I focused on creating web applications with react,
              redux, and node, in order to learn as much about web development
              as I possibly could. This was my priority since my main goal is to
              switch careers and become a web developer. Recently though, I have
              learned that it is possible to create desktop and mobile
              applications using similar technologies. At the moment, while my
              main goal is still the same, creating desktop and mobile
              applications has been an interesting experience so far and one
              that I want to take a deeper dive in to. <br />
              <br />
              My main takeaway from the time that I have invested so far is that
              coding has become a passion of mine and it is a passion that I
              want to hold on to no matter where the future takes me. Also,
              creating this stuff is kind of cool.
              <br /> <br />
              Thanks for reading.
            </p>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
}
