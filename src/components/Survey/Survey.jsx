import React, { Component } from 'react';
import { Link } from 'react-router';
import Question from './Question/Question.jsx';
import styles from './Survey.css';


class Survey extends Component {
  updateAnswerForm(e) {
    this.setState({

    })
  }

  buildQuestionObjects() {
      return this.props.questions.map((question, i) =>
        <Question
          key={i}
          questionObj={question}
          updateAnswerForm={this.props.updateAnswerForm}
        />
      );
    }

render() {
  console.log(this.props.questions)
    return (
      <div className={styles['survey']}>
        <div className={styles['survey-box']}>
          <div className={styles['quest-one']}>
            <div className={styles["home-logo"]}>
              <img src="/chairShare.png" alt="Logo" />
              <h1>chairShare</h1>
            </div>
            <div>hello</div>
            {this.buildQuestionObjects()}
              <button><Link className={styles['sub-survey']} to="/signup">Submit</Link></button>
            </div>
          </div>
        </div>
    );
  }
}

export default Survey;
