import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './page/PageTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Page />} />
        <Route path=':page' element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;