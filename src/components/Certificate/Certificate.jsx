import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Certificate</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/certificate.png")}
          alt="Certificate"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend </h3>
              {/* <p>
                I'm a frontend developer with experience in building React.js application
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend </h3>
              {/* <p>
                I have experience developing fast and optimised back-end systems
                and APIs using Node.js
              </p> */}
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain </h3>
              {/* <p>
              I have no experience in blockchain
              </p> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
