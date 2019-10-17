import React from "react";
import styles from "./EducationAndExperience.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

//Components
import EducationOrExperience from "./../../components/EducationOrExperience/EducationOrExperience";

interface AppProps {
  isVisible: string;
  inProp: boolean;
}

export default function EducationAndExperience(
  props: AppProps
): React.ReactElement {
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
            <p className={styles.subTitleText}>Education</p>
            <EducationOrExperience
              title="Computer Information Systems"
              companyOrSchool="Mt. San Jacinto College"
              degree="Associate's Degree"
              date="8/15/2016-12/15/2017"
            />
            <EducationOrExperience
              title="Pharmacological Chemistry"
              companyOrSchool="University of California, San Diego"
              degree="Bachelor's Degree"
              date="9/24/2012-9/03/2016"
            />
            <p className={styles.subTitleText}>Experience</p>
            <EducationOrExperience
              title="Data Governance Technician III"
              companyOrSchool="MilliporeSigma"
              duties={[
                "Reviewed historical formulation and physical/chemical property data of company products to ensure that accurate information was present on Safety Data Sheets, labels, and package inserts of the products.",
                "Determined formulation and physical/chemical properties of substances through batch record analysis and with the use of two ERP systems, SAP and Oracle. If information was lacking on the formulation, it would be caculated manually.",
                "Contacted vendors and suppliers for raw material formulations when necessary."
              ]}
              date="9/24/2012-9/03/2016"
            />
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
}
