import { useSelector } from 'react-redux';
import { State } from '../../../store/store';
import { ArticleStateType, ArticleType } from '../types';
import { ArticlesActions, ArticlesActionsTypes } from './actionsTypes';

export const initialFactorState: ArticleStateType = {
    articles: []
};

export const articleReducer = (state = initialFactorState, action: ArticlesActions): ArticleStateType => {
    switch (action.type) {
        case ArticlesActionsTypes.GET_ARTICLES_RESPONSE:
            return { ...state, articles: action.articles };
        default:
            return state;
    }
};

export const GetArticlesReducer = (): ArticleType[] => useSelector((state: State) => state.articleReducer.articles);
