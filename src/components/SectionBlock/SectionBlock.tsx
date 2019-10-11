import React, { useState, ReactElement } from "react";
import styles from "./SectionBlock.module.css";

interface AppProps {
  section: string;
  updateSection: (update: string) => void;
  containers: string[];
}

export default function SectionBlock(props: AppProps): ReactElement {
  const [changingSection, updateChangingSection] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <p onClick={() => updateChangingSection(!changingSection)}>
        {props.section}
      </p>
      {changingSection === false
        ? null
        : props.containers
            .filter(allItems => {
              return allItems !== props.section;
            })
            .map((notSelected, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    props.updateSection(notSelected);
                    updateChangingSection(false);
                  }}
                >
                  {notSelected}
                </p>
              );
            })}
    </div>
  );
}
