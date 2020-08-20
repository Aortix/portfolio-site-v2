import React from 'react';
import styles from './AboutMe.module.css';
import { Transition } from 'react-transition-group';

//Transitions
import { easeInOut } from './../../transitions/easeInOut';

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const AboutMe = React.memo((props: AppProps) => {
  if (props.isVisible === 'ABOUT ME') {
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
              My name is Stephen and I am trying to make a career change to IT.
              I obtained an AS in Computer Information Systems as a starting
              point and I have spent over the last year studying software
              development and creating personal software projects. I now feel
              more confident on the programming side of things and I am now
              studying to hopefully pass some certifications to improve my
              credentials.
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
