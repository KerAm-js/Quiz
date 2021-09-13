import { ADD_QUESTION, CHANGE_ANSWERS_COUNT } from "../actions/actionsTypes";

const initialState = {
    quiz: [],
};

const createReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                quiz: [...state.quiz, action.item],
            };

        case CHANGE_ANSWERS_COUNT:
            return {
                ...state,
                answersCount: action.count,
            };

        default:
            return state;
    };
};

export default createReducer;