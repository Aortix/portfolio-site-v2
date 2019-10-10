import React from "react";
import styles from "./LandingPage.module.css";

//React components
import MyInformation from "./../../components/MyInformation/MyInformation";
import SectionBlock from "../../components/SectionBlock/SectionBlock";

interface AppProps {
  section: string;
  updateSection: (update: string) => void;
  containers: string[];
}

export default function LandingPage(props: AppProps): React.ReactElement {
  return (
    <div className={styles.mainContainer}>
      <MyInformation />
      <SectionBlock
        section={props.section}
        updateSection={props.updateSection}
        containers={props.containers}
      />
    </div>
  );
}
