import { getList } from '../lib/markdownParser';

export const getAllProjects = (path) => {
  const projects = getList(path);
  const sortedProjects = projects.sort((a, b) => b.createdAt - a.createdAt);
  console.log(sortedProjects); // log node => czyli w terminalu 'live'

  return sortedProjects;
};
