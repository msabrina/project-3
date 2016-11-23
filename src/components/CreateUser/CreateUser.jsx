import React from 'react';
import './CreateUser.css';

const CreateUser = props => (
  <div className="create-user">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={props.firstName}
      onChange={props.formChange}
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={props.lastName}
      onChange={props.formChange}
    />
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={props.email}
      onChange={props.formChange}
    />
    <input
      type="password"
      name="password"
      placeholder="password"
      value={props.password}
      onChange={props.formChange}
    />
  <button onClick={props.createUser}> Hello </button>
  </div>
);
export default CreateUser;
