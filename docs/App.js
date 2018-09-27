import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotFound from '../src';

function App() {
  return (
    <Router>
      <Route path="/" component={NotFound} />
    </Router>
  );
}

export default App;
