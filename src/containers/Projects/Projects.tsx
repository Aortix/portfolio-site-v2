import React, { Suspense, Fragment } from "react";
import styles from "./Projects.module.css";
import { Transition } from "react-transition-group";

//Images
import BuddyConnectImage from "./../../images/buddyconnect.png";
import DodgeTheObjectsImage from "./../../images/dodge-the-objects-screenshot.jpg";
import JobKeeperLogImage from "./../../images/job-seeker-log.png";
import MoviesForEveryoneImage from "./../../images/moviesforeveryone-mainpage.png";
import BudgetAppImage from "./../../images/budgetelectronapp1.png";
import TaskAppImage from "./../../images/weeklytasks.png";
import PostShiftImage from "./../../images/post-shift.png";
import ShortStoriesImage from "./../../images/shortstories.png";
import AppStoreLogo from "./../../images/appstorelogo.svg";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

//Components
const Project = React.lazy(() => import("./../../components/Project/Project"));

interface AppProps {
  isVisible: string;
  inProp: boolean;
  darkTheme: boolean;
}

const Projects = React.memo((props: AppProps) => {
  if (props.isVisible === "PROJECTS") {
    return (
      <Transition in={props.inProp} timeout={easeInOut.duration}>
        {(state) => (
          <div
            className={styles.mainContainer}
            style={{
              ...easeInOut.defaultStyle,
              ...easeInOut.transitionStyles[state],
            }}
          >
            <div className={styles.titleContainer}>
              <i className="fas fa-cube fa-2x"></i>
              <span className={styles.titleText}>Projects</span>
            </div>
            <h3
              id={
                props.darkTheme === false
                  ? styles.webDevelopmentTitle1
                  : styles.webDevelopmentTitle1Dark
              }
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Web Development
            </h3>
            <div className={styles.webProjects}>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="Shortstories"
                  projectGitHubLink="https://github.com/Aortix/Shortstories"
                  projectLink="https://shortstories20200409092134.azurewebsites.net/"
                  projectImage={ShortStoriesImage}
                  projectTechnologies={[
                    "C#",
                    "MVC",
                    ".NET Core",
                    "EF Core",
                    "SQL Server",
                    "Firebase Auth",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "JavaScript",
                  ]}
                  projectDescription="A .NET Core web application that allows users to write out their own short stories and for anyone to read their stories and follow them if they want to read more from them."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="Job Seeker Log"
                  projectGitHubLink="https://github.com/Aortix/JobSeekerLog"
                  projectLink="https://jobseekerlog.herokuapp.com/"
                  projectImage={JobKeeperLogImage}
                  projectTechnologies={[
                    "PHP",
                    "MySQL",
                    "Linux",
                    "Apache",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "JavaScript",
                  ]}
                  projectDescription="Website for saving information about job applications while searching for a job. CRUD application with job data being created, read, updated, and deleted using PHP and MySQL."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="post-shift (Name of theme)"
                  projectGitHubLink="https://github.com/Aortix/post-shift"
                  projectLink="http://sriding-blog.com/"
                  projectImage={PostShiftImage}
                  projectTechnologies={[
                    "PHP",
                    "WordPress",
                    "Theme Development",
                    "HTML",
                    "CSS",
                    "JavaScript",
                  ]}
                  projectDescription="Custom WordPress Theme."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="BuddyConnect"
                  projectGitHubLink="https://github.com/Aortix/BuddyConnect"
                  projectLink="https://buddyconnecter.herokuapp.com/"
                  projectImage={BuddyConnectImage}
                  projectTechnologies={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Redux",
                    "Node/Express",
                    "Passport.js",
                    "JWTs",
                    "MongoDB",
                    "AWS S3",
                  ]}
                  projectDescription="A social media website created with the MERN + Redux stack. Features user, profile, avatar, post, and comment creation using a REST API along with authentication using Passport.js and JWT."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="Dodge The Stuff Ball Game"
                  projectGitHubLink="https://github.com/Aortix/Dodge-The-Stuff-Ball-Game"
                  projectLink="https://dodgetheobjects.com"
                  projectImage={DodgeTheObjectsImage}
                  projectTechnologies={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Canvas API",
                  ]}
                  projectDescription="A game where you dodge the objects that are flying at you until you reach the end of the timer. Features object collision, movement, and invincibility."
                />
              </Suspense>
              <Suspense fallback={<Fragment />}>
                <Project
                  darkTheme={props.darkTheme}
                  projectName="MoviesForEveryone"
                  projectGitHubLink="https://github.com/Aortix/MoviesForEveryone"
                  projectLink="https://moviesforeveryone.herokuapp.com/"
                  projectImage={MoviesForEveryoneImage}
                  projectTechnologies={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Redux",
                    "Node/Express",
                  ]}
                  projectDescription="A website for searching for potential movies to watch. Features filtering, pagination, and working with an external REST API."
                />
              </Suspense>
            </div>
            <h3
              id={
                props.darkTheme === false
                  ? styles.webDevelopmentTitle2
                  : styles.webDevelopmentTitle2Dark
              }
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Mobile Development
            </h3>
            <Suspense fallback={<Fragment />}>
              <Project
                darkTheme={props.darkTheme}
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
                  "Realm",
                ]}
                projectDescription="A weekly tasks mobile application that keeps track of your daily tasks that you do throughout the week and resets them every monday. Features task creation and storage using an embedded database system, local notifications, and material design."
                projectPlayStore={{
                  target:
                    "https://play.google.com/store/apps/details?id=com.weeklytasks&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
                  source:
                    "https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png",
                }}
                projectAppStore={{
                  target:
                    "https://apps.apple.com/us/app/weekly-task-planner/id1475793415?ls=1",
                  source: AppStoreLogo,
                }}
              />
            </Suspense>
            <h3
              className={
                props.darkTheme === false
                  ? styles.subTitleText
                  : styles.subTitleTextDark
              }
            >
              Desktop Development
            </h3>
            <Suspense fallback={<Fragment />}>
              <Project
                darkTheme={props.darkTheme}
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
                  "lowdb",
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
