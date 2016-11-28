import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Survey.css';


class Survey extends Component {
render() {
    return (
      <div className={styles['survey']}>
        <div className={styles['survey-box']}>
          <div className={styles['quest-one']}>
            <div className={styles["home-logo"]}>
              <img src="/chairShare.png" alt="Logo" />
              <h1>chairShare</h1>
            </div>
              <p>What is your annual household income:</p>
              <select className={styles["drop-down"]}>
                <option value="">0-20k</option>
                <option value="">21k-40k</option>
                <option value="">41k-80k</option>
                <option value="">81k+</option>
              </select>
              <p>What is the highest degree completed:</p>
              <select className={styles["drop-down"]}>
                <option value="">High School</option>
                <option value="">Associate's Degree</option>
                <option value="">Bachelor’s Degree</option>
                <option value="">Master’s+</option>
              </select>
              <p>What is your age:</p>
              <select className={styles["drop-down"]}>
                <option value="">0-18</option>
                <option value="">19-25</option>
                <option value="">25-40</option>
                <option value="">41+</option>
              </select>
            </div>
            <div className={styles['quest-two']}>
              <p>Employment Status: Are you currently…</p>
              <select className={styles["drop-down"]}>
                <option value="">Employed for wages</option>
                <option value="">Self-employed</option>
                <option value="">Unemployed</option>
                <option value="">Homemaker</option>
              </select>
              <p>Which of these countries do you live:</p>
              <select className={styles["drop-down"]}>
                <option value="">United States of America</option>
                <option value="">Canada</option>
                <option value="">Mexico</option>
              </select>
              <p>What hobby most interest you:</p>
              <select className={styles["drop-down"]}>
                <option value="">Travel</option>
                <option value="">Arts</option>
                <option value="">Sports</option>
                <option value="">Television</option>
              </select>
              <p>Do you rent or own a home:</p>
              <select className={styles["drop-down"]}>
                <option value="">Rent</option>
                <option value="">Own</option>
              </select>
              <p>Vehicle ownership:</p>
              <select className={styles["drop-down"]}>
                <option value="">Own 1</option>
                <option value="">Own 2+</option>
                <option value="">Lease</option>
                <option value="">None</option>
              </select>
              <button><Link className={styles['sub-survey']} to="/signup">Submit</Link></button>
            </div>
          </div>
        </div>
    );
  }
}

export default Survey;
