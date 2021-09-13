import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.scss';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { fetchQuizes } from '../../redux/actions/quiz';

class QuizList extends React.Component {

    renderQuizList() {
        return this.props.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink
                        to={`/quiz/` + quiz.id}
                    >
                        {quiz.name}
                    </NavLink>
                </li>
            );
        });
    };

    componentDidMount() {
        this.props.fetchQuizes();
    };

    render() {
        return (
            <div className={classes['QuizList']}>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.props.loading && this.props.quizes.length === 0
                            ? <Loader />
                            : <ul>
                                {this.renderQuizList()}
                            </ul>
                    }
                </div>
                {
                    this.props.isAuth
                        ?
                        null
                        : <div className={classes['info']}>
                            <p>Авторизируйтесь, чтобы создать свой тест</p>
                        </div>
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading,
        isAuth: !!state.auth.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizes: () => dispatch(fetchQuizes()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);