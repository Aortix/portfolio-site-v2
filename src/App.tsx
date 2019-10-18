import React, { useState, useEffect } from "react";
import "./App.css";

//React components
import LandingPage from "./containers/LandingPage/LandingPage";
import AboutMe from "./containers/AboutMe/AboutMe";
import Projects from "./containers/Projects/Projects";
import EducationAndExperience from "./containers/EducationAndExperience/EducationAndExperience";
import ContactForm from "./containers/ContactForm/ContactForm";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

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
      <Projects isVisible={section} inProp={inProp} />
      <EducationAndExperience isVisible={section} inProp={inProp} />
      <ContactForm isVisible={section} inProp={inProp} />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
