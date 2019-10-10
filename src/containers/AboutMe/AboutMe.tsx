import React from "react";

interface AppProps {
  isVisible: string;
}

export default function AboutMe(props: AppProps): React.ReactElement {
  if (props.isVisible === "About Me") {
    return (
      <div>
        <h2>About Me</h2>
        <p>
          This is a little bit about me. Grew up in murrieta in a relatively
          nice environment. Tried hard in school...
        </p>
      </div>
    );
  } else {
    return null;
  }
}
