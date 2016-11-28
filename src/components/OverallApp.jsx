import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Header    from './App/Common/Header/Header.jsx';
import App1      from './App/App1/App1.jsx';
import App2      from './App/App2/App2.jsx';
import App3      from './App/App3/App3.jsx';
import HomePage  from './HomePage/HomePage.jsx';
import PostItems from './App/Common/PostItems/PostItems.jsx';

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
      activeProduct: {},
      questions: [],
      answers: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
        10: '',
      },
    };
  }

updateAnswerForm(questionNum, answerVal) {
  console.log(questionNum, answerVal)
  const newAnswers = Object.assign({}, this.state.answers);
  newAnswers[questionNum] = answerVal;
  console.log(newAnswers);
  this.setState({
    answer: newAnswers,
  })
}
  setOverallState(key, obj) {
    this.setState({
      [key]: obj
    });
  }

  componentWillMount() {
    this.getAllProducts();
    this.getAllQuestions();
    console.log('here', this.state.products)
    this.setState({
      activeProduct: this.state.products[0],
    });
    // this.showProducts();
  }



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

// Get users survery
  getAllQuestions() {
    console.log('here 2');
    fetch('/api/v1/users/survey', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'GET',
    })
    .then(r => r.json())
    .then((array) => {
      console.log(array)
      this.setState({
        questions: array,
      });
    })
    .catch(err => console.log(err));
  }

  postUsersSurvey() {
    fetch('/users/survey', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify({
        email: document.getElementById('email').value,
        answers: this.state.answers,
      })
    })
    .then(r => r.json())
    .catch(err => console.log(err))
  }

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
      this.setState({
        products: data,
        activeProduct: data[0],
      });
    })
    .catch(err => console.log(err));
  }

  // getOneProducts() {
  //   console.log('here');
  //   const token = localStorage.getItem('userAuthToken');
  //   fetch(`/api/v1/products/${id}`, {
  //       headers: new Headers ({
  //         Token_Authorization: token,
  //         'Content-Type': 'application/json',
  //       }),
  //       method: 'GET',
  //     })
  //     .then(r => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         activeProduct: data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // handleSelectedItem(id) {
  //   fetch`(/api/v1/products/${id}`, {
  //     method: 'PUT'
  //   })
  //   .then(() => )
  // }

// mutator function changes slected product
// Code acquired from FireHouse lab.
  changeProduct(item) {
    // console.log(this.state.products, 'hello');
    console.log(item)
    this.setState({
      activeProduct: item,
    });
    browserHistory.push('/product')
  }

// we are setting the state like this because we are using react router.

  render() {
    return (
      <div>
      <Link to='/product'>product</Link>
        {this.props.children && React.cloneElement(this.props.children, {
          overallState: this.state,
          // setOverallState: this.setOverallState.bind(this),
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          products: this.state.products,
          changeProduct: this.changeProduct.bind(this),
          getAllProducts: this.getAllProducts.bind(this),
          activeProduct: this.state.activeProduct,
          // showProducts: this.showProducts.bind(this),
          updateAnswerForm: this.updateAnswerForm.bind(this),
          questions: this.state.questions,
        })
        }
      </div>
    );
  }
}


export default OverallApp;
