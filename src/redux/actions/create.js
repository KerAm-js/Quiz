import { ADD_QUESTION, CHANGE_ANSWERS_COUNT, } from './actionsTypes';
import axios from '../../axios/axios-quiz';

export function addQuestion(item) {
    return {
        type: ADD_QUESTION,
        item,
    };
};

export function addQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz);
    };
};

export function changeAnswersCount(count) {
    return {
        type: CHANGE_ANSWERS_COUNT,
        count,
    };
};
