import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {useQuery, searchBlogBySlug} from '../utils';
import {H2Title, MainTitle} from '../styles/typography';
import {selectBlogPosts} from '../features/blog/blogSlice';
import ContentContainer from '../components/ContentContainer';
import ScreenContainer from '../components/ScreenContainer';

const BlogSingle = () => {
  const blogs = useSelector(selectBlogPosts);
  const queryParams = useQuery();
  const currentBlog = searchBlogBySlug(blogs, queryParams.get('title'));

  if (currentBlog) {
    return (
      <ScreenContainer>
        <MainTitle>Gandalf</MainTitle>
        <ContentContainer>
          <H2Title>{currentBlog.title.rendered}</H2Title>
          <BlogContent dangerouslySetInnerHTML={{__html: currentBlog.content.rendered}} />
        </ContentContainer>
      </ScreenContainer>
    );
  }
  return (
    <ScreenContainer>
      <MainTitle>Gandalf</MainTitle>
      <ContentContainer>
        <H2Title>Error finding post</H2Title>
      </ContentContainer>
    </ScreenContainer>
  );
};

const BlogContent = styled.div`
  font-size: 18px;
`;

export default BlogSingle;
