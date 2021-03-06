import React from "react";
import styles from "./MyInformation.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {
  landingPageInProp: boolean;
  darkTheme: boolean;
  toggleDarkTheme: (update: boolean) => void;
}

const MyInformation = React.memo((props: AppProps) => {
  return (
    <Transition in={props.landingPageInProp} timeout={easeInOut.duration}>
      {(state) => (
        <div
          className={styles.mainContainer}
          style={{
            ...easeInOut.defaultStyle,
            ...easeInOut.transitionStyles[state],
          }}
        >
          <div className={styles.links}>
            <a
              href="https://github.com/Aortix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github fa-2x"
                style={{ marginRight: "6px" }}
              ></i>
            </a>
          </div>
          <div className={styles.switch}>
            <p
              style={{
                display: "inline-block",
                marginBottom: "0px",
                marginRight: "7px",
                fontSize: "19px",
                cursor: "default",
              }}
            >
              Toggle Lights
            </p>
            <i
              className="fas fa-adjust fa-2x"
              onClick={() => {
                props.toggleDarkTheme(!props.darkTheme);
                window.localStorage.setItem(
                  "theme",
                  !props.darkTheme === true ? "dark" : "light"
                );
              }}
            ></i>
          </div>
          <h1 className={styles.nameText}>Stephen Riding</h1>
          <p className={styles.contactText}>ridingjr@gmail.com</p>
          <p className={styles.contactText}>858-633-3487</p>
        </div>
      )}
    </Transition>
  );
});

export default MyInformation;
