import { getList } from 'lib/markdownParser';

export const getAllProjects = () => {
  const projects = getList('_projects');

  return {
    props: { projects: projects.sort((a, b) => b.createdAt - a.createdAt) }
  };
};
