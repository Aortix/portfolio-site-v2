import React from "react";

interface AppProps {
  isVisible: string;
}

export default function ContactForm(props: AppProps): React.ReactElement {
  if (props.isVisible === "Contact") {
    return (
      <div>
        <h2>Contact Form</h2>
        <p>Form Here</p>
      </div>
    );
  } else {
    return null;
  }
}
