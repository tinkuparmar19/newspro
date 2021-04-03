import React from 'react'

import Home from './Home'
import Nav from './Nav';
import Bookmark from './Bookmark';
import { BrowserRouter, Route } from 'react-router-dom';
import BookMarkList from './BookMarkList';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Route path='/' exact>
            <Bookmark />
            <Nav />
            <Home />
          </Route>
          <Route path='/bookmark'>
            <BookMarkList />
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
