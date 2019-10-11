import React from "react";
import styles from "./EducationAndExperience.module.css";

interface AppProps {
  isVisible: string;
}

export default function EducationAndExperience(
  props: AppProps
): React.ReactElement {
  if (props.isVisible === "EDUCATION & EXPERIENCE") {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <i className="fas fa-briefcase fa-2x"></i>
          <span className={styles.titleText}>Education and Experience</span>
        </div>
        <p className={styles.subTitleText}>Education</p>
        <div className={styles.schoolContainer}>
          <h3>Computer Information Systems</h3>
          <h4>Mt. San Jacinto College</h4>
          <h5>Associate's Degree</h5>
          <p>8/15/2016-12/15/2017</p>
        </div>
        <p className={styles.subTitleText}>Experience</p>
        <h3>Data Governance Technician III</h3>
        <h4>Company: MilliporeSigma</h4>
        <ul>
          <li>
            Reviewed historical formulation and physical/chemical property data
            of company products to ensure that accurate information was present
            on Safety Data Sheets, labels, and package inserts of the products.
          </li>
          <li>
            Determined formulation and physical/chemical properties of
            substances through batch record analysis and with the use of two ERP
            systems, SAP and Oracle. If information was lacking on the
            formulation, it would be caculated manually.
          </li>
          <li>
            Contacted vendors and suppliers for raw material formulations when
            necessary.
          </li>
        </ul>
        <p>February 2017 - December 2018</p>
      </div>
    );
  } else {
    return null;
  }
}
