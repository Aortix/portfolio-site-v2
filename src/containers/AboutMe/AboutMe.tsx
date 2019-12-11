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
              Hello visitor, <br />
              <br />
              My name is Stephen and I am currently looking for a career change
              to IT. In order to make this change a reality, I have obtained an
              Associates degree in Computer Information Systems with a
              concentration on programming, and I have spent the last eleven
              months studying and creating personal web, mobile, and desktop
              projects using technologies like HTML, CSS, JavaScript, React,
              Redux, Node.js, Bootstrap, MongoDB, PHP, MySQL, Electron.js, React
              Native, and Git. If you head over to the projects section of this
              website or to my GitHub, you can see all of these technologies and
              more in action.
              <br />
              <br />
              On top of programming, I've also taken an introductory course on
              Windows Server and I am currently working through a course on
              Networking and Information Security. I've had a fond interest in
              computers for a while now and thus, have tampered with things like
              linux, virtual machines, putting together PCs, and other smaller
              things like setting up static IP addresses. I used to help my
              family with PC issues all the time too.
              <br />
              <br />
              And with that, my introduction is over and if you want to know a
              bit more about me then you can check out some of the other
              sections on the website. Thanks for taking the time to read this!
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
