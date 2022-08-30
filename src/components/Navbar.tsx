import React from "react";
import NavbarLogo from "../img/Mortal-Kombat-Logo.png";
export default function Navbar() {
  const styles = {
    btn: {
      display: "block",
      height: "4rem",
      backgroundColor: "#000000",
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      height: "6rem",
      marginTop: "0.5rem",
    },
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={styles.btn}>
        <div style={styles.logo}>
          <img src={NavbarLogo} alt="fireSpot" />
        </div>
      </nav>
    </>
  );
}
