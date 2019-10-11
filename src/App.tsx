import React, { useState } from "react";
import "./App.css";

//Bootstrap components
import Card from "react-bootstrap/Card";

//React components
import LandingPage from "./containers/LandingPage/LandingPage";
import AboutMe from "./containers/AboutMe/AboutMe";
import Projects from "./containers/Projects/Projects";
import EducationAndExperience from "./containers/EducationAndExperience/EducationAndExperience";
import ContactForm from "./containers/ContactForm/ContactForm";

const App: React.FC = () => {
  const containers: string[] = [
    "ABOUT ME",
    "PROJECTS",
    "EDUCATION & EXPERIENCE",
    "CONTACT"
  ];

  const [section, updateSection] = useState(containers[0]);

  return (
    <div className="App">
      <LandingPage
        section={section}
        updateSection={updateSection}
        containers={containers}
      />
      <AboutMe isVisible={section} />
      <Projects isVisible={section} />
      <EducationAndExperience isVisible={section} />
      <ContactForm isVisible={section} />
    </div>
  );
};

export default App;
