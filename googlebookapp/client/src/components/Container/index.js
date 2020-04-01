import React from "react";

// This Container component allows us to use a bootstrap container without worrying about class names
export default function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

