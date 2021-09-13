import React from 'react';
import style from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

class FinishedQuiz extends React.Component {
  render() {
    let rightAnswerCount = Object.keys(this.props.results).reduce((total, key) => {
      if (this.props.results[key] === 'success') {
        total++;
      };
      return total;
    }, 0);

    return (
      <div className={style['FinishedQuiz']}>
        <h1>Finished</h1>
        <ul>
          {this.props.quiz.map((quizItem, index) => {
            let iconClass = [
              'fa',
              this.props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
              style[this.props.results[quizItem.id]],
            ];
            return (
              <li key={index}>
                <strong>{index + 1}</strong>.&nbsp;
                {quizItem.question}
                <i className={iconClass.join(' ')} />
              </li>
            )
          })}
        </ul>
        <p>Правильно {rightAnswerCount} из {this.props.quiz.length}</p>
        <Button onClick={this.props.retryHandler} type={'primary'}>Повторить</Button>
        <Link to="/" >
          <Button type={'success'}>Перейти к списку тестов</Button>
        </Link>
      </div>
    )
  }
}

export default FinishedQuiz;