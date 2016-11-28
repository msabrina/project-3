import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Header    from './App/Common/Header/Header.jsx';
import App1      from './App/App1/App1.jsx';
import App2      from './App/App2/App2.jsx';
import App3      from './App/App3/App3.jsx';
import HomePage  from './HomePage/HomePage.jsx';

class OverallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productListItem: '',
      products: [],
      totalResults: 0,
      searchTerm: '',
      title: '',
      image: '',
      description: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      url:'',
    };
  }

  setOverallState(key, obj) {
    this.setState({
      [key]: obj
    });
  }

  componentWillMount() {
    this.getAllProducts();
    // this.showProducts();
  }

// PUT /users/
  // PutUser(e) {
  //   e.preventDefault();
  //   const bodyObj = {
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //   fetch('/api/v1/users', {
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     }),
  //     method: 'PUT',
  //     body: JSON.stringify(bodyObj)
  //   })
  //   .then(r => r.json())
  //   .then((token) => {
  //     localStorage.setItem('userAuthToken', token);
  //   })
  //   .catch(err => console.log(err));
  // }

  // DeleteUser(e){
  //   e.preventDefault();
  //   fetch('/products/:id', {
  //     hearders: new Headers({
  //       'Content-Type': 'application/json',
  //       Token_Authorization: token,
  //     }),
  //     method: 'DELETE',
  //     body: JSON.stringify(bodyObj)
  //   })
  //   .then(r => r.json())
  //   .then((token) => {
  //     localStorage.setItem('userAuthToken', token);
  //   })
  //   .catch(err => console.log(err));
  // }

  updateBodyForm(e) {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

// // Get users survery
//   userSurvey(e) {
//     fetch('/users/survey', {
//       headers: new Headers({
//         'Content-Type': 'application/json'
//       }),
//       method: 'GET',
//     })
//     .then(r => r.json())
//     .then((array) => {
//       this.setState({
//         questions: array
//       });
//     })
//     .catch(err => console.log(err));
//   }

  // postUsersSurvey() {
  //   fetch('/users/survey', {
  //     headers: new Headers({
  //       'Content-Type': 'application/json'
  //     }),
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: document.getElementById('email').value,
  //       answer: {
  //         1: document.getElementById('answer-1').value,
  //         2: document.getElementById('answer-2').value,
  //         3: document.getElementById('answer-3').value,
  //         4: document.getElementById('answer-4').value,
  //         5: document.getElementById('answer-5').value,
  //         6: document.getElementById('answer-6').value,
  //         7: document.getElementById('answer-7').value,
  //         8: document.getElementById('answer-8').value,
  //         9: document.getElementById('answer-9').value,
  //         10: document.getElementById('answer-10').value,
  //       }
  //     })
  //     .then(r => r.json())
  //     .then((response) => )
  // })
  // }

  getAllProducts() {
    const token = localStorage.getItem('userAuthToken');
    fetch('/api/v1/products', {
      headers: new Headers ({
        Token_Authorization: token,
        'Content-Type': 'application/json',
      }),
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      this.setOverallState('products', data);
    })
    .catch(err => console.log(err));
  }

// mutator function changes slected product
// Code acquired from FireHouse lab.
  changeProduct(item) {
    this.setState({
      products: this.state.productListItem[item],
    });
  }

// we are setting the state like this because we are using react router.

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          overallState: this.state,
          setOverallState: this.setOverallState.bind(this),
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          products: this.state.products,
          changeProduct: this.changeProduct.bind(this),
          // showProducts: this.showProducts.bind(this),
        })
        }
      </div>
    );
  }
}


export default OverallApp;
