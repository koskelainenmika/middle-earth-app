import React from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {getBlogPosts} from './features/blog/blogSlice';
import './App.css';
import BlogSingle from './routes/BlogSingle';
import Home from './routes/Home';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBlogPosts(1));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <BlogSingle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
