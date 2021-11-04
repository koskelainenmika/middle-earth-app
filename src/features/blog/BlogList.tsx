import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {selectBlogPosts} from './blogSlice';
import BlogListItem from './BlogListItem';

const BlogList = () => {
  const blogs = useSelector(selectBlogPosts);

  const renderBlogPosts = () => {
    if (blogs) {
      return blogs.map((blog: Blog) => {
        return <BlogListItem blogPost={blog} key={blog.id} />;
      });
    }
    return null;
  };

  return (
    <BlogListContainer>
      <h2>Blog posts</h2>
      {renderBlogPosts()}
    </BlogListContainer>
  );
};

const BlogListContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 4px #c8c8c8;
  border-radius: 12px;
  padding: 20px;
`;

export default BlogList;
