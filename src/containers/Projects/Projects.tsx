import React from "react";

interface AppProps {
  isVisible: string;
}

export default function Projects(props: AppProps) {
  if (props.isVisible === "Projects") {
    return (
      <div>
        <h2>Projects</h2>
        <p>Here is 1 Project</p>
        <p>Here is 2 project</p>
      </div>
    );
  } else {
    return null;
  }
}
