import React, { useState, Fragment } from "react";
import styles from "./Project.module.css";

interface AppProps {
  projectName: string;
  projectGitHubLink: string;
  projectLink: string;
  projectVideo?: any;
  projectImage?: any;
  projectMobileImage?: any;
  projectMobileVideo?: any;
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
  const [technology, showTechnology] = useState(false);

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
        <span>|</span>
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
      ) : !props.projectMobileImage && !props.projectMobileVideo ? (
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.projectImage}
            src={props.projectImage}
            alt="Project Visualization"
          />
        </a>
      ) : (
        <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.projectMobileImage}
            src={props.projectMobileImage || props.projectMobileVideo}
            alt="Project Visualization"
          />
        </a>
      )}
      {technology === false ? (
        <button
          className={styles.toggleTechnologiesButton}
          onClick={() => {
            showTechnology(!technology);
          }}
        >
          Display Technology
        </button>
      ) : (
        <Fragment>
          <button
            className={styles.toggleTechnologiesButton}
            onClick={() => {
              showTechnology(!technology);
            }}
          >
            Display Technology
          </button>
          <ul className={styles.techListContainer}>
            {props.projectTechnologies.map((tech, index, array) => {
              return (
                <li
                  key={props.projectName + tech + index}
                  className={styles.techListText}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
      {!props.projectPlayStore && !props.projectAppStore ? null : (
        <div className={styles.projectMobileLinks}>
          {!props.projectPlayStore ? null : (
            <a
              href={props.projectPlayStore.target}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Get it on Google Play"
                src={props.projectPlayStore.source}
                style={{ display: "inline-block", height: "70px" }}
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
                  height: "50px"
                }}
              />
            </a>
          )}
        </div>
      )}
      <p className={styles.projectDescription}>{props.projectDescription}</p>
    </div>
  );
}

export default Project;
