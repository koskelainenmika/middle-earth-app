import React from 'react';
import styled from 'styled-components';

import {H3Title} from '../../styles/typography';

interface BlogListItemProps {
  blogPost: Blog;
}

const BlogList = (props: BlogListItemProps) => {
  const {blogPost} = props;

  return (
    <BlogListItemContainer>
      <H3Title>{blogPost.title.rendered}</H3Title>
      {/* eslint-disable-next-line react/no-danger */}
      <Excerpt dangerouslySetInnerHTML={{__html: blogPost.excerpt.rendered}} />
    </BlogListItemContainer>
  );
};

const BlogListItemContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Excerpt = styled.div`
  color: black;
`;

export default BlogList;
