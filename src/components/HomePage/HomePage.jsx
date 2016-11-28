import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HomePage.css';


class HomePage extends Component {
render() {
    return (
      <div className={styles["home-page"]}>
      <div className={styles['auth-home']}>
        <div className={styles["home-logo"]}>
          <img src="/chairShare.png" alt="Logo" />
          <h1>chairShare</h1>
        </div>
        <div className={styles['home-about']}>
          <h2>About us</h2>
          <p>chairShare is a place for you rich assholes to sell your used crap.
          But nice used crap like Restoration Hardware and West Elm and antique
          shit. No poor people allowed. Want to see if you qualify? Take our
          survey to see if you're rich enough, bitch</p>
          <div className={styles['link']}>
            <Link className={styles['home-button']} to="/survey"><button>See if you qualify</button></Link>
            <Link className={styles['home-button']} to="/login"><button>Log In</button></Link>
          </div>
        </div>
      </div>
        <div className={styles["box-one"]} />
        <div className={styles["box-two"]} />
        <div className={styles["box-three"]} />
        <div className={styles["box-four"]} />
      </div>
    );
  }
}

export default HomePage;
