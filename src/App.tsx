import React, { useState, useEffect, Suspense, Fragment } from "react";
import "./App.css";

//React components
import LandingPage from "./containers/LandingPage/LandingPage";
import AboutMe from "./containers/AboutMe/AboutMe";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
const Projects = React.lazy(() => import("./containers/Projects/Projects"));
const EducationAndExperience = React.lazy(() =>
  import("./containers/EducationAndExperience/EducationAndExperience")
);
const ContactForm = React.lazy(() =>
  import("./containers/ContactForm/ContactForm")
);

const cssStyleSheet = {
  "background-color": "white",
  color: "#303030",
  "font-family": "Sukhumvit Set, Quicksand, Times, serif",
  "font-weight": 300,
  "min-height": "100%"
};

const App: React.FC = () => {
  const containers: string[] = [
    "ABOUT ME",
    "PROJECTS",
    "EDUCATION & EXPERIENCE",
    "CONTACT"
  ];

  const [section, updateSection] = useState(containers[0]);
  const [inProp, setInProp] = useState(false);
  const [darkTheme, toggleDarkTheme] = useState(
    window.localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div
      className="App"
      style={
        darkTheme === false
          ? { ...cssStyleSheet }
          : {
              ...cssStyleSheet,
              color: "hsl(0, 0%, 90%)",
              backgroundColor: "hsl(0, 0%, 13%)"
            }
      }
    >
      <LandingPage
        section={section}
        updateSection={updateSection}
        containers={containers}
        inProp={inProp}
        setInProp={setInProp}
        darkTheme={darkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <AboutMe isVisible={section} inProp={inProp} darkTheme={darkTheme} />
      <Suspense fallback={<Fragment />}>
        <Projects isVisible={section} inProp={inProp} darkTheme={darkTheme} />
      </Suspense>
      <Suspense fallback={<Fragment />}>
        <EducationAndExperience
          isVisible={section}
          inProp={inProp}
          darkTheme={darkTheme}
        />
      </Suspense>
      <Suspense fallback={<Fragment />}>
        <ContactForm
          isVisible={section}
          inProp={inProp}
          darkTheme={darkTheme}
        />
      </Suspense>
      <ScrollToTopButton darkTheme={darkTheme} />
    </div>
  );
};

export default App;
