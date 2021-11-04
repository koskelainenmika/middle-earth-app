import React from 'react';

import BlogList from '../features/blog/BlogList';
import ScreenContainer from '../components/ScreenContainer';
import {MainTitle} from '../styles/typography';

const Home = () => {
  return (
    <ScreenContainer>
      <MainTitle>Home screen</MainTitle>
      <BlogList />
    </ScreenContainer>
  );
};

export default Home;
