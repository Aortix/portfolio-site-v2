import React from "react";
import styles from "./Project.module.css";

interface AppProps {
  projectName: string;
  projectGitHubLink: string;
  projectLink: string;
  projectVideo?: any;
  projectImage?: any;
  projectTechnologies: string[];
  projectPlayStore?: {
    target: string;
    source: string;
  };
  projectAppStore?: {
    target: string;
    source: any;
  };
  projectDescription: string;
}

function Project(props: AppProps) {
  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.projectNameText}>{props.projectName}</h4>
      <div className={styles.projectLinksContainer}>
        <a
          href={props.projectGitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLinkText}
        >
          GitHub
        </a>
        <span>&nbsp;|&nbsp;</span>
        <a
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLinkText}
        >
          Website
        </a>
      </div>
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
      {!props.projectPlayStore && !props.projectAppStore ? null : (
        <div>
          {!props.projectPlayStore ? null : (
            <a
              href={props.projectPlayStore.target}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Get it on Google Play"
                src={props.projectPlayStore.source}
                style={{ display: "inline-block", height: "80px" }}
              />
            </a>
          )}
          {!props.projectAppStore ? null : (
            <a
              href={props.projectAppStore.target}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={props.projectAppStore.source}
                alt="Get it on the App Store"
                style={{
                  display: "inline-block",
                  height: "60px",
                  padding: "10px"
                }}
              />
            </a>
          )}
        </div>
      )}
      <p>{props.projectDescription}</p>
    </div>
  );
}

export default Project;
