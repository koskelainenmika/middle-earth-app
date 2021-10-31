import React from 'react';
import {useDispatch} from 'react-redux';

import {getBlogPosts} from './features/blog/blogSlice';
import './App.css';
import BlogList from './features/blog/BlogList';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  dispatch(getBlogPosts(1));

  return (
    <div className="App">
      <BlogList />
    </div>
  );
};

export default App;
