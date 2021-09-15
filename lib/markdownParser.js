import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContetents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContetents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};

export const getFileBySlug = async (path, slug) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent } = matter(fileContents);
  let content = '';
  if (markdownContent) {
    content = await remark().use(html).process(markdownContent);
    content = content.toString();
  }

  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};
