import { ArticleType } from '../types';
import { ArticlesActions, ArticlesActionsTypes } from './actionsTypes';

export const getArticlesRequest = (): ArticlesActions => {
    return { type: ArticlesActionsTypes.GET_ARTICLES_REQUEST };
};

export const getArticlesResponse = (articles: [ArticleType]): ArticlesActions => {
    return { type: ArticlesActionsTypes.GET_ARTICLES_RESPONSE, articles };
};
