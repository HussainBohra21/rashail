import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Header from './views/Header';
import GuideForm from './views/GuideForm';
import Banner from './views/Banner';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/guide-form" Component={GuideForm} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
