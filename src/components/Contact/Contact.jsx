import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.logoimg} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:abhimanyuraghuwanshi305@gmail.com">abhimanyuraghuwanshi305@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.logoimg}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://in.linkedin.com/in/abhimanyu-raghuwanshi-346b121a1">linkedin.com/abhimanyu-raghuwanshi-346b121a1</a>
        </li>
        <li className={styles.link}>
          <img className={styles.logoimg} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/abhimanyuraghuwanshi">github.com/abhimanyuraghuwanshi</a>
        </li>
      </ul>
    </footer>
  );
};
