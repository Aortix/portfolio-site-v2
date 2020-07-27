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
              On top of getting an AS in Computer Information Systems, I have
              spent over a year studying software development and creating
              personal projects. Now that I feel more confident with my
              programming ability, I am now studying to hopefully pass some
              certification exams (i.e. Network+, Security+, AWS Solutions
              Architect) to feel more confident with infrastructure. I'm always
              learning and don't plan on stopping anytime soon.
              <br />
              <br />
              If you want to know more about me, then don't hesistate to contact
              me. Thank you for reading.
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
