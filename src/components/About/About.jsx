import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Node.js expert, crafting secure, high-performance APIs with robust error handling.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width={55} src={getImageUrl("about/blockchaindevloper.png")} alt="UI icon" /> &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.aboutItemText}>
              <h3>Blockchain Developer</h3>
              <p>
                Solidity expert for smart contracts, proficient in Web3.js and Ether.js for Ethereum blockchain interactions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a React.js skilled developer specialized in code abstraction and performance optimization.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width={55} src={getImageUrl("about/youtube.png")} alt="UI icon" />&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.aboutItemText}>
              <a href="https://www.youtube.com/playlist?list=PL2IB7gGy4L0rKzYedZ-HnNzW5kvg5tzB9" target="_blank">
                <h3>Blockchain Educator</h3>
                <p>
                  Empowering with concise and insightful YouTube tutorials.  <span className={styles.link}>Visit</span>
                </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
