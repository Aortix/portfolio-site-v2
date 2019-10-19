import React, { Suspense, Fragment } from "react";
import styles from "./EducationAndExperience.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

//Components
const EducationOrExperience = React.lazy(() =>
  import("./../../components/EducationOrExperience/EducationOrExperience")
);

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const EducationAndExperience = React.memo((props: AppProps) => {
  if (props.isVisible === "EDUCATION & EXPERIENCE") {
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
              <i className="fas fa-briefcase fa-2x"></i>
              <span className={styles.titleText}>Education and Experience</span>
            </div>
            <p
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Education
            </p>
            <div className={styles.educationContainer}>
              <Suspense fallback={<Fragment />}>
                <EducationOrExperience
                  title="Computer Information Systems"
                  companyOrSchool="Mt. San Jacinto College"
                  degree="Associate's Degree"
                  date="8/15/2016 - 12/15/2017"
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <EducationOrExperience
                  title="Pharmacological Chemistry"
                  companyOrSchool="University of California, San Diego"
                  degree="Bachelor's Degree"
                  date="9/24/2012 - 9/03/2016"
                />
              </Suspense>
            </div>
            <p
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Experience
            </p>
            <div className={styles.experienceContainer}>
              <Suspense fallback={<Fragment />}>
                <EducationOrExperience
                  title="Data Governance Technician III"
                  companyOrSchool="MilliporeSigma"
                  duties={[
                    "Reviewed historical formulation and physical/chemical property data of company products to ensure that accurate information was present on Safety Data Sheets, labels, and package inserts of the products.",
                    "Determined formulation and physical/chemical properties of substances through batch record analysis and with the use of two ERP systems, SAP and Oracle.",
                    "Contacted vendors and suppliers for raw material formulations when necessary."
                  ]}
                  date="9/24/2012 - 9/03/2016"
                />
              </Suspense>
            </div>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default EducationAndExperience;
