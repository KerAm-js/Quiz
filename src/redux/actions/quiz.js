import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_BY_ID_SUCCESS,
    RETRY_HANDLER,
    SET_ANSWER_STATE_AND_RESULTS,
    SET_IS_FINISHED,
    NEXT_QUESTION,
    TO_QUIZ_BEGINING,
} from './actionsTypes';

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get('/quizes.json');

            let quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`,
                });
            });
            dispatch(fetchQuizesSuccess(quizes));
        } catch (e) {
            dispatch(fetchQuizesError(e));
            console.log(e);
        };
    };
};

export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(`/quizes/${quizId}.json`);
            const quiz = response.data;
            dispatch(fetchQuizByIdSuccess(quiz));
        } catch (e) {
            dispatch(fetchQuizesError(e));
            console.log(e);
        };
    };
};

export function answerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if (state.answerState[key] === 'success') {
                return
            };
        };

        const question = state.quiz[state.activeQuestion];
        const results = state.results;
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            };

            dispatch(setAnswerStateAndResultsAC(answerId, 'success', results));

            const timeOut = window.setTimeout(() => {
                if (state.activeQuestion + 1 === state.quiz.length) {
                    dispatch(setIsFinishedAC(true));
                } else {
                    dispatch(nextQuestion(state.activeQuestion + 1));
                };
                window.clearTimeout(timeOut);
            }, 1000)

        } else {
            results[question.id] = 'error';
            dispatch(setAnswerStateAndResultsAC(answerId, 'error', results));
        };
    };
};

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START,
    };
};

export function fetchQuizesSuccess(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes,
    };
};

export function fetchQuizByIdSuccess(quiz) {
    return {
        type: FETCH_QUIZ_BY_ID_SUCCESS,
        quiz,
    };
};

export function fetchQuizesError(error) {
    return {
        type: FETCH_QUIZES_ERROR,
        error,
    };
};

export function retryHandlerAC() {
    return {
        type: RETRY_HANDLER,
    };
};

export function setAnswerStateAndResultsAC(answerId, value, results) {
    return {
        type: SET_ANSWER_STATE_AND_RESULTS,
        answerId,
        value,
        results,
    };
};

export function setIsFinishedAC(value) {
    return {
        type: SET_IS_FINISHED,
        value,
    };
};

export function nextQuestion(value) {
    return {
        type: NEXT_QUESTION,
        value,
    };
};

export function toQuizBeginning() {
    return {
        type: TO_QUIZ_BEGINING,
    };
};

