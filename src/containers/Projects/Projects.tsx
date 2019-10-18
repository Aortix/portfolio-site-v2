import React, { Suspense, Fragment } from "react";
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

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

//Components
const Project = React.lazy(() => import("./../../components/Project/Project"));

interface AppProps {
  isVisible: string;
  inProp: boolean;
}

const Projects = React.memo((props: AppProps) => {
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
              <Suspense fallback={<Fragment />}>
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
                  projectDescription="A social media website created with the MERN + Redux stack. Features user, profile, avatar, post, and comment creation using a REST API along with authentication using Passport.js and JWT."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
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
                  projectDescription="A game where you dodge the objects that are flying at you until you reach the end of the timer. Features object collision, movement, and invincibility."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
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
                  projectDescription="A website for searching for potential movies to watch. Features filtering, pagination, and working with an external REST API."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  projectName="PTC-Elements"
                  projectGitHubLink="https://github.com/Aortix/Ptc-Elements"
                  projectLink="https://laughing-lamport-dd8fc4.netlify.com"
                  projectImage={PTCElementsImage}
                  projectTechnologies={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Gatsby.js"
                  ]}
                  projectDescription="A website that displays some of the elements of the periodic table and provides information about them."
                />
              </Suspense>
            </div>
            <h3 className={styles.subTitleText}>Mobile Development</h3>
            <Suspense fallback={<Fragment />}>
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
                projectDescription="A weekly tasks mobile application that keeps track of your daily tasks that you do throughout the week and resets them every monday. Features task creation and storage using an embedded database system, local notifications, and material design."
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
            </Suspense>
            <h3 className={styles.subTitleText}>Desktop Development</h3>
            <Suspense fallback={<Fragment />}>
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
                projectDescription="A weekly budget desktop application that keeps track of your daily purchases throughout the week. Information is saved and stored for up to 12 weeks through the use of an embedded database system."
              />
            </Suspense>
          </div>
        )}
      </Transition>
    );
  } else {
    return null;
  }
});

export default Projects;
