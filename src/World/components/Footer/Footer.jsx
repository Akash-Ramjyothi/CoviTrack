import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        <em>
          {" "}
          <span role="img" aria-label="heart">
            
          </span>{" "}
           <a href="https://github.com/Akash-Ramjyothi/CoviTrack">Source Code</a>
        </em>
      </p>
    </div>
  );
}

export default Footer;
