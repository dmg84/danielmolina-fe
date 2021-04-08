export type ArticleType = {
    title: string;
    lead: string;
    img: string;
};

export type ArticleStateType = {
    readonly articles: ArticleType[];
};
