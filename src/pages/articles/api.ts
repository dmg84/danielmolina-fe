import { ArticleType } from './articlesTypes';

export const getArticles = async (): Promise<ArticleType[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    img: 'https://miro.medium.com/max/1400/1*4W8PWHe54ame_hhM_A9oPw.jpeg',
                    title: 'How to Practice Loving Kindness',
                    lead:
                        'Daily insights on life in the face of uncertainty, by psychiatrist and habit change specialist Dr. Jud Brewer'
                },
                {
                    img: 'https://miro.medium.com/max/1400/1*4W8PWHe54ame_hhM_A9oPw.jpeg',
                    title: 'If You’re Still Vaping, Experts Urge You to Stop',
                    lead: 'The latest learnings on vaping and the coronavirus'
                },
                {
                    img: 'https://miro.medium.com/max/1400/1*4W8PWHe54ame_hhM_A9oPw.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                },
                {
                    img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    title: 'This is a title',
                    lead: 'This is a little description about the article'
                }
            ]);
        }, 2000);
    });

    // await axiosInstance.get(`character/?page=${index}`)
};
