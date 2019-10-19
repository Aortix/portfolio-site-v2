import React, { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";

//React components
import MyInformation from "./../../components/MyInformation/MyInformation";
import SectionBlock from "../../components/SectionBlock/SectionBlock";

interface AppProps {
  section: string;
  updateSection: (update: string) => void;
  containers: string[];
  inProp: boolean;
  setInProp: (update: boolean) => void;
  darkTheme: boolean;
  toggleDarkTheme: (update: boolean) => void;
}

export default function LandingPage(props: AppProps): React.ReactElement {
  const [landingPageInProp, setLandingPageInProp] = useState(false);

  useEffect(() => {
    setLandingPageInProp(true);
  }, []);

  return (
    <div id="Landing Page" className={styles.mainContainer}>
      <MyInformation
        landingPageInProp={landingPageInProp}
        darkTheme={props.darkTheme}
        toggleDarkTheme={props.toggleDarkTheme}
      />
      <SectionBlock
        section={props.section}
        updateSection={props.updateSection}
        containers={props.containers}
        inProp={props.inProp}
        setInProp={props.setInProp}
        landingPageInProp={landingPageInProp}
      />
    </div>
  );
}
