import React from 'react';
import style from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import {
  fetchQuizById,
  answerClick,
  retryHandlerAC,
} from '../../redux/actions/quiz';


class Quiz extends React.Component {

  isQuizFinished() {
    return this.props.activeQuestion + 1 === this.props.quiz.length;
  };

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  };

  componentWillUnmount() {
    this.props.retryHandler();
  };

  render() {
    return (
      <div className={style['Quiz']}>
        <div className={style['QuizWrapper']}>
          {
            this.props.loading || this.props.quiz.length === 0
              ? <Loader />
              : this.props.isFinished
                ? <FinishedQuiz
                  results={this.props.results}
                  quiz={this.props.quiz}
                  retryHandler={this.props.retryHandler}
                />
                : <div>
                  <h1>Ответьте на все вопросы</h1>
                  <ActiveQuiz
                    answers={this.props.quiz[this.props.activeQuestion].answers}
                    question={this.props.quiz[this.props.activeQuestion].question}
                    onAnswerClick={this.props.answerClickHandler}
                    quizLength={this.props.quiz.length}
                    answerNumber={this.props.activeQuestion + 1}
                    state={this.props.answerState}
                  />
                </div>
          }
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    isFinished: state.quiz.isFinished,
    results: state.quiz.results,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    retryHandler: () => dispatch(retryHandlerAC()),
    answerClickHandler: answerId => dispatch(answerClick(answerId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);