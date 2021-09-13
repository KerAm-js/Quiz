import React from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import classes from './QuizCreator.module.scss';
import { createControl, validate, formValidate } from '../../form/formFramework';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Select from '../../components/UI/Select/Select';
import { connect } from 'react-redux';
import { addQuestion, addQuiz } from '../../redux/actions/create';

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Invalid answer text',
        id: number,
    }, { required: true })
};

function createFormControls(count) {
    let formControlls = {
        question: createControl({
            label: 'Введите текст вопроса',
            errorMessage: 'invalid question text',
        }, { required: true }),
    };
    for (let i = 1; i <= count; i++) {
        formControlls[`option${i}`] = createOptionControl(i);
    };
    return formControlls;
};

class QuizCreator extends React.Component {

    state = {
        isFormValid: false,
        rightAnswerId: 1,
        answersCount: 4,
        formControlls: createFormControls(this.answersCount || 4),
    };
    onSubmitHandler = event => {
        event.preventDefault();
    };

    createQuestionHandler = event => {
        event.preventDefault();
        let quizItem = {
            id: this.props.quiz.length + 1,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
            ],
        };

        Object.keys(this.state.formControlls).forEach(key => {
            if (key === 'question') {
                quizItem[key] = this.state.formControlls[key].value
            } else {
                quizItem.answers.push({
                    text: this.state.formControlls[key].value,
                    id: this.state.formControlls[key].id,
                });
            };
        });

        this.props.addQuestion(quizItem);

        this.setState({
            isFormValid: false,
            rightAnswerId: 1,
            formControlls: createFormControls(this.state.answersCount),
        });
    };

    createQuizHandler = event => {
        event.preventDefault();
        this.props.addQuiz();
        this.setState({
            isFormValid: false,
            rightAnswerId: 1,
            formControlls: createFormControls(this.state.answersCount),
        });
    };

    changeInputHandler = (event, controllerName) => {
        const formControlls = { ...this.state.formControlls };
        const control = { ...formControlls[controllerName] }
        control.value = event.target.value;
        control.touched = true;
        control.valid = validate(control.value, control.validation);
        formControlls[controllerName] = control;

        this.setState({
            formControlls,
            isFormValid: formValidate(formControlls),
        });
    };

    changeRightAnswer = (event) => {
        this.setState({
            rightAnswerId: Number(event.target.value),
        });
    };

    changeAnswersCount = event => {
        this.setState({
            answersCount: event.target.value,
            formControlls: createFormControls(event.target.value),
        });
    };

    renderInputs() {
        return Object.keys(this.state.formControlls).map((controllerName, index) => {
            const control = this.state.formControlls[controllerName];
            return (
                <Auxiliary key={index} >
                    <Input
                        value={control.value}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        valid={control.valid}
                        onChange={event => this.changeInputHandler(event, controllerName)}
                    />
                    {index === 0 ? <hr /> : null}
                </Auxiliary>
            );
        });
    };

    render() {
        const answersCountSelect = () => {
            return (
                <Select
                    label="Выберите количество ответов"
                    value={this.state.answersCount}
                    onChange={event => this.changeAnswersCount(event)}
                    options={[
                        { text: 2, value: 2 },
                        { text: 3, value: 3 },
                        { text: 4, value: 4 },
                    ]}
                />
            );
        };
        const rightAnswerSelect = () => {
            let options = [];
            for (let i = 1; i <= this.state.answersCount; i++) {
                options.push({
                    text: i,
                    value: i,
                });
            };
            return (
                <Select
                    label="Выберите правильный ответ"
                    value={this.state.rightAnswerId}
                    onChange={event => this.changeRightAnswer(event)}
                    options={options}
                />
            )
        }
        return (

            <div className={classes['QuizCreator']} >

                <div>
                    <h1>QuizCreator</h1>

                    <form onSubmit={event => this.onSubmitHandler(event)}>

                        {this.renderInputs()}
                        {answersCountSelect()}
                        {rightAnswerSelect()}

                        <Button
                            type="primary"
                            onClick={event => this.createQuestionHandler(event)}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type="success"
                            onClick={event => this.createQuizHandler(event)}
                            disabled={this.props.quiz.length === 0}
                        >
                            Создать тест
                        </Button>
                    </form>
                    {
                        this.state.isFormValid
                            ?
                            <div className={classes['info']}>
                                <p>Нажмите "добавить вопрос", прежде чем создать тест!</p>
                            </div>
                            :
                            null
                    }

                </div>

            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        quiz: state.create.quiz,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addQuestion: item => dispatch(addQuestion(item)),
        addQuiz: () => dispatch(addQuiz()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);