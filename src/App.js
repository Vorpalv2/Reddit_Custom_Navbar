import React, { useState } from "react";

export default function App() {
  const [styles] = useState({
    listStyle: "none",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-around"
  });

  return (
    <div style={styles}>
      <img
        src="https://styles.redditmedia.com/t5_aqjyd/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfYzhkM2EzYTgzYmRlNWRhZDA2ZDQzNjY5NGUzZTIyYWMzZTY0ZDU3N181MzI5ODM0_rare_d0210501-39d9-497b-80ad-557e01acf595-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=855f23f4e4335707d2a56f4eb78e8bebe0ad506b"
        alt="profile"
      />
      <ul style={styles}>
        <li style={{ padding: "10px" }}>Home</li>
        <li style={{ padding: "10px" }}>Contact</li>
        <li style={{ padding: "10px" }}>About us</li>
      </ul>
    </div>
  );
}
