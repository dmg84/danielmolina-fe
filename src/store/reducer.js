import {actionTypes} from "./actions";
import {useSelector} from "react-redux";

const initialState = {
    articles: [],
    articlesIndex: 0
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.getArticlesPaginatedResponse:
            return {...state, articles: state.articles.concat(action.payload), articlesIndex: state.articlesIndex + 1};

        case actionTypes.increaseArticlesIndexResponse:
            return {...state, articlesIndex: state.articlesIndex + 1};

        default:
            return state;
    }
};

export const useArticlesReducer = () => {
    return useSelector((state) => state.articles);
};

export const useArticlesIndexReducer = () => {
    return useSelector((state) => state.articlesIndex);
};