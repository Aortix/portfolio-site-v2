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

const App: React.FC = () => {
  const containers: string[] = [
    "ABOUT ME",
    "PROJECTS",
    "EDUCATION & EXPERIENCE",
    "CONTACT"
  ];

  const [section, updateSection] = useState(containers[0]);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="App">
      <LandingPage
        section={section}
        updateSection={updateSection}
        containers={containers}
        inProp={inProp}
        setInProp={setInProp}
      />
      <AboutMe isVisible={section} inProp={inProp} />
      <Suspense fallback={<Fragment />}>
        <Projects isVisible={section} inProp={inProp} />
      </Suspense>
      <Suspense fallback={<Fragment />}>
        <EducationAndExperience isVisible={section} inProp={inProp} />
      </Suspense>
      <Suspense fallback={<Fragment />}>
        <ContactForm isVisible={section} inProp={inProp} />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
