import React, { PureComponent } from "react";
import styles from "./ScrollToTopButton.module.css";
import { Transition } from "react-transition-group";

//Transitions
import { easeInOut } from "./../../transitions/easeInOut";

interface AppProps {}
interface AppState {
  inProp: boolean;
}

class ScrollToTopButton extends PureComponent<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      inProp: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY > document.getElementById("Landing Page").scrollHeight
      ) {
        document.getElementById("Scroll Button").style.pointerEvents = "auto";
        this.setState({
          inProp: true
        });
      } else {
        document.getElementById("Scroll Button").style.pointerEvents = "none";
        this.setState({
          inProp: false
        });
      }
    });
  };

  scrollToTopOfPage = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Transition in={this.state.inProp} timeout={easeInOut.duration}>
        {state => (
          <div
            id="Scroll Button"
            className={styles.mainContainer}
            style={{
              ...easeInOut.defaultStyle,
              ...easeInOut.transitionStyles[state]
            }}
            onClick={this.scrollToTopOfPage}
          >
            <div className={styles.arrowContainer}>
              <i className="fas fa-arrow-up fa-2x"></i>
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

export default ScrollToTopButton;
