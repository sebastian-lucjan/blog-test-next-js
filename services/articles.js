import { getList, getFileBySlug } from 'lib/markdownParser';

export const getListOfArticles = () => {
  const articles = getList('_articles');

  return articles.sort((a, b) => b.createdAt - a.createdAt);
};

export const getArticle = async (slug) => {
  const article = await getFileBySlug('_articles', slug);

  return article;
};
