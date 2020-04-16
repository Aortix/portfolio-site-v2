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
              My name is Stephen and I am currently looking for a career change
              to IT. In order to make this change a reality, I have obtained an
              Associates degree in Computer Information Systems with a
              concentration in programming, and I have spent the last fifteen
              months studying and creating personal web, mobile, and desktop
              projects using multiple different technologies like HTML, CSS,
              JavaScript, React, Redux, Node.js, PHP, MySQL, WordPress, C#, .NET
              Core, SQL Server, React Native, and more. If you head over to the
              projects section on this website or to my GitHub, you can see most
              of my work.
              <br />
              <br />
              In addition to programming, I have also studied a bit on other IT
              subjects like networking, VMs, and Windows Server.
              <br />
              <br />
              And with that, my introduction is over and if you want to know
              more about me then you can check out some of the other sections on
              the website. Thank you for taking the time to read this!
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
