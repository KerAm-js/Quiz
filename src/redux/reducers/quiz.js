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
} from '../actions/actionsTypes';

const initialState = {
    quizes: [],
    loading: true,
    error: null,
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    results: {},
    quiz: [],
};

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,
                loading: true,
            };

        case FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                loading: false,
                quizes: action.quizes,
            };

        case FETCH_QUIZES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case FETCH_QUIZ_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                quiz: action.quiz,
            };

        case RETRY_HANDLER:
            return {
                ...state,
                activeQuestion: 0,
                answerState: null,
                isFinished: false,
                results: {},
            };

        case SET_ANSWER_STATE_AND_RESULTS:
            return {
                ...state,
                answerState: { [action.answerId]: action.value },
                results: action.results,
            };

        case SET_IS_FINISHED:
            return {
                ...state,
                isFinished: action.value,
            };

        case NEXT_QUESTION:
            return {
                ...state,
                activeQuestion: action.value,
                answerState: null
            };

        case TO_QUIZ_BEGINING:
            return {
                ...state,

            };

        default:
            return state;
    };
};

export default quizReducer;
