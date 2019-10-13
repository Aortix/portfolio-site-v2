interface easeInOutTransition {
  duration: number;
  defaultStyle: {
    transition: string;
    opacity: number;
  };
  transitionStyles: any;
}

export const easeInOut: easeInOutTransition = {
  duration: 500,
  defaultStyle: {
    transition: `opacity ${500}ms ease-in-out`,
    opacity: 0
  },
  transitionStyles: {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
  }
};
