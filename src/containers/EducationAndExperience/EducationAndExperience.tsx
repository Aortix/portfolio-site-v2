import React from "react";

interface AppProps {
  isVisible: string;
}

export default function EducationAndExperience(
  props: AppProps
): React.ReactElement {
  if (props.isVisible === "Education & Experience") {
    return (
      <div>
        <h2>Education and Experience</h2>
        <p>Education</p>
        <p>Experience</p>
      </div>
    );
  } else {
    return null;
  }
}
