import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhimanyu Raghuwanshi</h1>
        <p className={styles.description}>
          I'm a blockchain developer with +3 years of experience using Solidity and
          MERN-stack. Reach out if you'd like to learn more!
        </p>
        <span>
        <a href="https://drive.google.com/file/d/1qLwYIbeRG2hkFN0YIPKlLgFwJmR3VLwR/view?usp=sharing" className={styles.contactBtn} target="_blank">
          Resume
        </a>
        <a href="https://www.linkedin.com/in/abhimanyu-raghuwanshi-346b121a1/" className={styles.contactBtn} target="_blank">
          Linkedin
        </a>
        <a href="https://www.youtube.com/playlist?list=PL2IB7gGy4L0rKzYedZ-HnNzW5kvg5tzB9" className={styles.contactBtn} target="_blank">
          YouTube
        </a>
        </span>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
