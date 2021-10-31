import React from 'react';
import styled from 'styled-components';

interface BlogListItemProps {
  blogPost: Blog;
}

const BlogList = (props: BlogListItemProps) => {
  const {blogPost} = props;

  return (
    <BlogListItemContainer>
      <h1>{blogPost.title.rendered}</h1>
    </BlogListItemContainer>
  );
};

const BlogListItemContainer = styled.div`
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
