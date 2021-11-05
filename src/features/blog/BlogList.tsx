import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {selectBlogPosts} from './blogSlice';
import BlogListItem from './BlogListItem';
import {H2Title} from '../../styles/typography';

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
      <H2Title>Viimeisimmät kirjoitukset</H2Title>
      {renderBlogPosts()}
    </BlogListContainer>
  );
};

const BlogListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export default BlogList;
