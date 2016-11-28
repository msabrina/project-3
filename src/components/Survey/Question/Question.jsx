import React from 'react';
import styles from './Question.css';

const Question = props => (
  <div className={styles['quests']}>
    <p>{props.questionObj.question_text}</p>
    <select onChange={(e) => props.updateAnswerForm(props.questionObj.question_num, e.target.value)}>
      <option value="1">{props.questionObj.choice_1}</option>
      <option value="2">{props.questionObj.choice_2}</option>
      <option value="3">{props.questionObj.choice_3}</option>
      <option value="4">{props.questionObj.choice_4}</option>
    </select>
  </div>
);

export default Question;
