import React from 'react';
import { Link } from 'react-router';
import styles from './CreateUser.css';

const CreateUser = props => (
  <div className={styles["home-page"]}>
    <div className={styles['create-user']}>
    <div className={styles["home-logo"]}>
      <img src="/chairShare.png" alt="Logo" />
      <h1>chairShare</h1>
    </div>
    <div className={styles["home-content"]}>
      <h2>Sign Up</h2>
      <div className={styles["home-input"]}>
        <p>First Name</p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.formChange} />
      </div>
      <div className={styles["home-input"]}>
        <p>Last Name</p>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.lastName}
          onChange={props.formChange} />
      </div>
      <div className={styles["home-input"]}>
      <p>Email</p>
      <input id="email"
        type="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.formChange} />
      </div>
      <div className={styles["home-input"]}>
      <p>Password</p>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={props.password}
        onChange={props.formChange} />
      </div>
      <button onClick={props.createUser}><Link className={styles['login']} to="/login"> Submit </Link></button>
    </div>
    </div>
  </div>
);

export default CreateUser;
