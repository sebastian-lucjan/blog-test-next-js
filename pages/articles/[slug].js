import Layout from '../../components/Layout';
import { Head } from 'next/document';
import { getFileBySlug, getList } from '../../lib/markdownParser';

export const getStaticPaths = async () => {
  const articles = getList('_articles');

  return {
    paths: articles.map((art) => ({
      params: {
        slug: art.slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug('_articles', slug);
  return {
    props: { article }
  };
};

const Article = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </Layout>
  );
};

export default Article;
