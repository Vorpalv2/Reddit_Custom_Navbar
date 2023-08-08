import { useState } from "react";

export default function List(props) {
  const [styles] = useState({
    listStyle: "none",
    width: "70%"
  });
  const globalStyling = { ...styles, ...props.globalStyle };

  return <li style={globalStyling}>{props.listItem}</li>;
}
