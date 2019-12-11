import React from "react";
import styles from "./Certifications.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

//PDF certificates
import data_structures_and_algorithms_course_certificate from "../../pdfs/data_structures_and_algorithms_course_certificate.pdf";
import mern_stack_course_certificate from "../../pdfs/mern_stack_course_certificate.pdf";
import windows_server_2016_course_certificate from "../../pdfs/windows_server_2016_course_certificate.pdf";

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const Certifications = React.memo((props: AppProps) => {
  if (props.isVisible === "CERTIFICATES") {
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
              <i className="fas fa-certificate fa-2x"></i>
              <span className={styles.titleText}>Certificates</span>
            </div>
            <p
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Udemy Courses
            </p>
            <div className={styles.courseContainer}>
              <p className={styles.courseTitleText}>
                JavaScript Data Structures and Algorithms Masterclass
              </p>
              <div className={styles.courseLinksContainer}>
                <a
                  href={data_structures_and_algorithms_course_certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Completion Certificate</p>
                </a>
                <a
                  href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Course Itself</p>
                </a>
              </div>
            </div>
            <div className={styles.courseContainer}>
              <p className={styles.courseTitleText}>
                MERN Stack Front To Back: Full Stack React, Redux and Node.js
              </p>
              <div className={styles.courseLinksContainer}>
                <a
                  href={mern_stack_course_certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Completion Certificate</p>
                </a>
                <a
                  href="https://www.udemy.com/course/mern-stack-front-to-back/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Course Itself</p>
                </a>
              </div>
            </div>
            <div className={styles.courseContainer}>
              <p className={styles.courseTitleText}>
                Microsoft Windows Server 2016 Training for Beginners
              </p>
              <div className={styles.courseLinksContainer}>
                <a
                  href={windows_server_2016_course_certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Completion Certificate</p>
                </a>
                <a
                  href="https://www.udemy.com/course/windows-server-2016/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className={styles.paragraphText}>Course Itself</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default Certifications;
