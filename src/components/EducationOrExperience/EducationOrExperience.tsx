import React from "react";
import styles from "./EducationOrExperience.module.css";

interface AppProps {
  title: string;
  companyOrSchool: string;
  degree?: string;
  duties?: string[];
  date: string;
}

function EducationOrExperience(props: AppProps) {
  return (
    <div>
      <div className={styles.subContainer}>
        <h3>{props.title}</h3>
        <h4>{props.companyOrSchool}</h4>
        {props.degree ? (
          <h5>{props.degree}</h5>
        ) : (
          <ul>
            {props.duties.map((duty, index) => {
              return (
                <li key={duty + index} style={{ fontSize: "16px" }}>
                  {duty}
                </li>
              );
            })}
          </ul>
        )}
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default EducationOrExperience;
