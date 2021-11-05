import React from 'react';
import {useLocation} from 'react-router-dom';

export const useQuery = () => {
  const {search} = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const searchBlogBySlug = (blogs: Blog[], slug: string | null) => {
  if (!slug) {
    return null;
  }
  let index = -1;
  index = blogs.findIndex((blog: Blog) => blog.slug === slug);
  if (index >= 0) {
    return blogs[index];
  }
  return null;
};
