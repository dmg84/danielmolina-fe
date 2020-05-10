export const actionTypes = {
    getArticlesPaginated: 'GET_ARTICLES_PAGINATED',
    getArticlesPaginatedResponse: 'GET_ARTICLES_PAGINATED_RESPONSE',
    increaseArticlesIndexResponse: 'INCREASE_ARTICLES_INDEX_RESPONSE'
};

export const getArticles = () => {
    return {type: actionTypes.getArticlesPaginated}
}

export const getArticlesResponse = (articles) => {
    return {type: actionTypes.getArticlesPaginatedResponse, payload: articles}
};

export const increaseArticlesIndex = () => {
    return {type: actionTypes.increaseArticlesIndexResponse}
};


