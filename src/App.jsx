import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompleteLyrics from './CompleteLyrics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompleteLyrics />} />
      </Routes>
    </Router>
  );
}

export default App;
