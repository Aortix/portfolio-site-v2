import React from "react";
import styles from "./Projects.module.css";

//Images
import BuddyConnectImage from "./../../images/buddyconnect-login.png";

//Components
import Project from "./../../components/Project/Project";

interface AppProps {
  isVisible: string;
}

export default function Projects(props: AppProps) {
  if (props.isVisible === "PROJECTS") {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <i className="fas fa-cube fa-2x"></i>
          <span className={styles.titleText}>Projects</span>
        </div>
        <h3 className={styles.subTitleText}>Web Development</h3>
        <Project
          projectName="BuddyConnect"
          projectGitHubLink="https://github.com/Aortix/BuddyConnect"
          projectLink="https://protected-wildwood-18595.herokuapp.com/login"
          projectImage={BuddyConnectImage}
          projectTechnologies={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js/Express",
            "Passport.js",
            "MongoDB",
            "AWS S3"
          ]}
          projectDescription="Social Media Website"
        />
        <h3 className={styles.subTitleText}>Mobile Development</h3>
        <h3 className={styles.subTitleText}>Desktop Development</h3>
      </div>
    );
  } else {
    return null;
  }
}
