import { useState } from "react";

export default function Button(props) {
  const [style] = useState({
    padding: "5px",
    margin: "5px"
  });

  const combinedStyles = { ...style, ...props.globalStyle };
  return (
    <button style={combinedStyles} onClick={props.func}>
      {props.value}
    </button>
  );
}
