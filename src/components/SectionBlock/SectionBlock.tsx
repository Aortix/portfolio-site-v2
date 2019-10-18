import React, { useState, useEffect, ReactElement } from "react";
import styles from "./SectionBlock.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  section: string;
  updateSection: (update: string) => void;
  containers: string[];
  inProp: boolean;
  setInProp: (update: boolean) => void;
  landingPageInProp: boolean;
}

export default function SectionBlock(props: AppProps): ReactElement {
  const [changingSection, updateChangingSection] = useState(
    window.innerWidth >= 800 ? true : false
  );

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      if (e.target.innerWidth >= 800) {
        updateChangingSection(true);
      } else {
        updateChangingSection(false);
      }
    });
  }, []);

  return (
    <Transition in={props.landingPageInProp} timeout={easeInOut.duration}>
      {state => (
        <div
          className={styles.mainContainer}
          style={{
            ...easeInOut.defaultStyle,
            ...easeInOut.transitionStyles[state]
          }}
        >
          {window.innerWidth >= 800 ? (
            props.containers.map((eachContainer, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    props.updateSection(eachContainer);
                    props.setInProp(false);
                    setTimeout(() => {
                      props.setInProp(true);
                    }, 100);
                  }}
                >
                  {eachContainer}
                </p>
              );
            })
          ) : (
            <div>
              <p
                onClick={() => {
                  updateChangingSection(!changingSection);
                }}
              >
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
                            props.setInProp(false);
                            setTimeout(() => {
                              props.setInProp(true);
                            }, 100);
                            updateChangingSection(false);
                          }}
                        >
                          {notSelected}
                        </p>
                      );
                    })}
            </div>
          )}
        </div>
      )}
    </Transition>
  );
}
