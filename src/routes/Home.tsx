import React from 'react';

import BlogList from '../features/blog/BlogList';
import ScreenContainer from '../components/ScreenContainer';
import {MainTitle} from '../styles/typography';
import ContentContainer from '../components/ContentContainer';

const Home = () => {
  return (
    <ScreenContainer>
      <MainTitle>Gandalf</MainTitle>
      <ContentContainer>
        <BlogList />
      </ContentContainer>
    </ScreenContainer>
  );
};

export default Home;
