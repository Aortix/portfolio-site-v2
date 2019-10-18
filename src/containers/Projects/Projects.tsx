import React from "react";
import styles from "./Projects.module.css";
import { Transition } from "react-transition-group";

//Images
import BuddyConnectImage from "./../../images/buddyconnect-login.png";
import DodgeTheObjectsImage from "./../../images/dodge-the-objects-screenshot.jpg";
import MoviesForEveryoneImage from "./../../images/moviesforeveryone-mainpage.png";
import PTCElementsImage from "./../../images/ptc-elements-1.png";
import BudgetAppImage from "./../../images/budgetelectronapp1.png";
import TaskAppImage from "./../../images/Simulator - iPhone 8 Plus.png";
import AppStoreLogo from "./../../images/appstorelogo.svg";

//Components
import Project from "./../../components/Project/Project";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  isVisible: string;
  inProp: boolean;
}

export default function Projects(props: AppProps) {
  if (props.isVisible === "PROJECTS") {
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
              <i className="fas fa-cube fa-2x"></i>
              <span className={styles.titleText}>Projects</span>
            </div>
            <h3 className={styles.subTitleText}>Web Development</h3>
            <div className={styles.webProjects}>
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
                  "Node/Express",
                  "Passport.js",
                  "MongoDB",
                  "AWS S3"
                ]}
                projectDescription="Social Media Website"
              />
              <Project
                projectName="Dodge The Stuff Ball Game"
                projectGitHubLink="https://github.com/Aortix/Dodge-The-Stuff-Ball-Game"
                projectLink="https://dodgetheobjects.com"
                projectImage={DodgeTheObjectsImage}
                projectTechnologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Canvas API"
                ]}
                projectDescription="This is a game where you are a ball that moves up and down on a canvas and your goal is to dodge the objects that are flying at you for as long as possible. As time goes on, dodging the objects becomes more difficult!"
              />
              <Project
                projectName="MoviesForEveryone"
                projectGitHubLink="https://github.com/Aortix/MoviesForEveryone"
                projectLink="https://cryptic-badlands-88386.herokuapp.com"
                projectImage={MoviesForEveryoneImage}
                projectTechnologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Redux",
                  "Node/Express"
                ]}
                projectDescription="Website for searching for movies that you may want to watch based off the filters that you set! Click on each movie to see more information about it!"
              />
              <Project
                projectName="PTC-Elements"
                projectGitHubLink="https://github.com/Aortix/Ptc-Elements"
                projectLink="https://laughing-lamport-dd8fc4.netlify.com"
                projectImage={PTCElementsImage}
                projectTechnologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Gatsby.js (React)"
                ]}
                projectDescription="Displays the elements of the periodic table and provides information about them."
              />
            </div>
            <h3 className={styles.subTitleText}>Mobile Development</h3>
            <Project
              projectName="Weekly Task Planner"
              projectGitHubLink="https://github.com/Aortix/WeeklyTasks"
              projectLink="https://apps.apple.com/us/app/weekly-task-planner/id1475793415?ls=1"
              projectMobileImage={TaskAppImage}
              projectTechnologies={[
                "HTML",
                "CSS",
                "TypeScript",
                "React Native",
                "React Native Paper",
                "Realm"
              ]}
              projectDescription="A weekly tasks mobile application that keeps track of your daily tasks that you do throughout the week. Resets (unchecks) all tasks on each Monday. Material Design."
              projectPlayStore={{
                target:
                  "https://play.google.com/store/apps/details?id=com.weeklytasks&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
                source:
                  "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
              }}
              projectAppStore={{
                target:
                  "https://apps.apple.com/us/app/weekly-task-planner/id1475793415?ls=1",
                source: AppStoreLogo
              }}
            />
            <h3 className={styles.subTitleText}>Desktop Development</h3>
            <Project
              projectName="Weekly Budget Application"
              projectGitHubLink="https://github.com/Aortix/Budget-of-the-Week"
              projectLink="https://github.com/Aortix/Budget-of-the-Week/releases"
              projectImage={BudgetAppImage}
              projectTechnologies={[
                "HTML",
                "CSS",
                "JavaScript",
                "Electron.js",
                "React",
                "Redux",
                "lowdb"
              ]}
              projectDescription="A weekly budget desktop application to keep track of your daily purchases throughout the week. Previous weeks are stored up to 12 weeks, and then the oldest weeks will be overwritten. Created with Javascript using Electron.js."
            />
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
}
