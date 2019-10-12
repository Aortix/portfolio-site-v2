import React from "react";
import styles from "./Project.module.css";

interface AppProps {
  projectName: string;
  projectGitHubLink: string;
  projectLink: string;
  projectVideo?: any;
  projectImage?: any;
  projectTechnologies: string[];
  projectMobileAvailability?: any[];
  projectDescription: string;
}

function Project(props: AppProps) {
  return (
    <div className={styles.mainContainer}>
      <h4>{props.projectName}</h4>
      <a
        href={props.projectGitHubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <span>&nbsp;|&nbsp;</span>
      <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
        Website
      </a>
      {props.projectVideo ? (
        <p>Video info here</p>
      ) : (
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.projectImage}
            src={props.projectImage}
            alt="Project Visualization"
          />
        </a>
      )}
      <ul className={styles.techListContainer}>
        {props.projectTechnologies.map((tech, index, array) => {
          return (
            <li
              key={props.projectName + tech + index}
              className={styles.techListText}
            >
              {tech}&nbsp;&#8226;&nbsp;
            </li>
          );
        })}
      </ul>
      {props.projectMobileAvailability
        ? props.projectMobileAvailability.map((avail, index) => {
            return (
              <img
                key={props.projectName + avail + index}
                src={avail}
                alt="Mobile Location"
              />
            );
          })
        : null}
      <p>{props.projectDescription}</p>
    </div>
  );
}

export default Project;
