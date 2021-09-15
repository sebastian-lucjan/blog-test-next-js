import { getFileBySlug, getList } from 'lib/markdownParser';

export const getListOfArticles = () => {
  const articles = getList('_articles');
  console.log(articles.sort((a, b) => b.createdAt - a.createdAt));
  return articles.sort((a, b) => b.createdAt - a.createdAt);
};

export const getArticle = async (slug) => await getFileBySlug('_articles', slug);
