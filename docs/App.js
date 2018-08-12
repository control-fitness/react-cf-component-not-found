import React from 'react';
import { Link } from 'found';

function App({ children }) {
  return (
    <div>
      <Link to="/404">Example</Link>
      {children}
    </div>
  );
}

export default App;
