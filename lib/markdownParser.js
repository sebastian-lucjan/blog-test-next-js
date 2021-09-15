import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

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
