import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './App1.css';
import PostItems from './../Common/PostItems/PostItems.jsx';
import Profile from './Profile/Profile.jsx';
import Header from './../Common/Header/Header.jsx';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    }
}

 getUserInfo() {
    const token = localStorage.getItem('userAuthToken');
    console.log('here 2');
    fetch('/api/v1/users', {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Token_Authorization': token,
      }),
      method: 'GET',
    })
    .then(r => r.json())
    .then((userData) => {
      console.log(userData);
      this.setState({
        userData: userData,
      })
    })
    .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getUserInfo();
  }

// PUT /users/
  editProfile(){
    e.preventDefault();
    const bodyObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/v1/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'PUT',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('userAuthToken', token);
      browserHistory.push('/app/profile');
    })
    .catch(err => console.log(err));
  }

  updateNameForm(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  updateLastForm(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  updatePasswordForm(e) {
    this.setState({
      password: e.target.value,
    });
  }


  render() {
    return (
      <div>
        <div className={styles["Header"]}>
          <Header />
        </div>
        <div className={styles['app']}>
        <PostItems
          changeProduct={this.props.changeProduct}
          products={this.props.products}
        />
        <Profile
        />
        </div>
      </div>
    );
  }
}

export default App1;

