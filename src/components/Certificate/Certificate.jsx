import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="certificate">
      <h2 className={styles.title}>Certificate</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/certificate.png")}
          alt="Certificate"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
        <img src={getImageUrl("about/certificateicon2.png")} alt="Server icon" /> &nbsp;&nbsp;
            <div className={styles.aboutItemText}>
              <a href="https://www.linkedin.com/posts/abhimanyu-raghuwanshi-346b121a1_accuracyabrandabrprecisionabraward-espsofttech-activity-7255547212615536640-XyUS?utm_source=share&utm_medium=member_desktop" target="_blank">
              <h3>Accuracy & Precision Award </h3>
              <p className={styles.smalltext}>
                Yearly achievement award from ESP softtech.pvt.ltd
              </p></a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateicon.png")} alt="Cursor icon" />&nbsp;&nbsp;
            <div className={styles.aboutItemText}>
              <a href="https://drive.google.com/file/d/154dl_QrZjkiR2oPvcBFjiECp2jV_ERln/view?usp=sharing" target="_blank">
              <h3>IELTS Certified </h3>
              <p className={styles.smalltext}>
                (International English Language Testing System) IELTS Band 7.0 and  (Common European
                Framework of Reference for Languages) CEFR Level C1 holder
              </p></a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateicon2.png")} alt="Server icon" /> &nbsp;&nbsp;
            <div className={styles.aboutItemText}>
              <a href="https://drive.google.com/file/d/1hxHpIGQ6kVFkJ3rhRCr8u0Ixi3MHcWaE/view?usp=sharing" target="_blank">
              <h3>Employee of the Month</h3>
              <p className={styles.smalltext}>
                Two-time recipient of the Employee of the Month award.
              </p>
              </a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificateicon3.png")} alt="UI icon" />&nbsp;&nbsp;
            <div className={styles.aboutItemText}>
            <a href="https://drive.google.com/file/d/1CYXYx3hsZKswtViZQ-I7RzgiOsd8_y-C/view" target="_blank">
              <h3>Digitial Marketing </h3>
              <p className={styles.smalltext}>
              Google Certificate in Fundamentals of Digital Marketing.
              </p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
