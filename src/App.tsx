import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {getBlogPosts} from './features/blog/blogSlice';
import './App.css';
import BlogSingle from './routes/BlogSingle';
import Home from './routes/Home';
import {getExperienceList} from './features/experience/experienceSlice';
import {useAppDispatch} from './hooks';

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getBlogPosts(1));
    dispatch(getExperienceList());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<BlogSingle />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
