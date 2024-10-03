import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css'; // Import the CSS file

const CompleteLyrics = () => {
  const [activeSinger, setActiveSinger] = useState('');
  const [lyricsHistory, setLyricsHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const handleSingerChange = (singer) => {
    if (currentInput.trim() !== '') {
      setLyricsHistory((prevLyricsHistory) => [
        ...prevLyricsHistory,
        {
          singer: activeSinger,
          lyric: currentInput,
          timestamp: Date.now(),
        },
      ]);
    }

    setActiveSinger(singer);
    setCurrentInput('');
  };

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const renderLyrics = () => {
    return (
      <>
        {lyricsHistory.map((entry, index) => (
          <p
            key={index}
            className={`lyric-entry ${entry.singer
              .toLowerCase()
              .replace(' ', '-')}`}
          >
            {entry.lyric}
          </p>
        ))}
        {currentInput && (
          <p
            className={`lyric-entry ${activeSinger
              .toLowerCase()
              .replace(' ', '-')}`}
          >
            {currentInput}
          </p>
        )}
      </>
    );
  };

  return (
    <div className="page-container">
      <div className="lyrics-container">
        <h1>Complete the Lyrics</h1>
        {/* Navigation link back to home */}
        <Link to="/" className="home-link"></Link>

        {/* Singer selection buttons */}
        <div className="buttons">
          <button
            className="button first-singer"
            onClick={() => handleSingerChange('First Singer')}
          >
            FIRST SINGER
          </button>
          <button
            className="button second-singer"
            onClick={() => handleSingerChange('Second Singer')}
          >
            SECOND SINGER
          </button>
          <button
            className="button third-singer"
            onClick={() => handleSingerChange('Third Singer')}
          >
            THIRD SINGER
          </button>
          <button
            className="button fourth-singer"
            onClick={() => handleSingerChange('Fourth Singer')}
          >
            FOURTH SINGER
          </button>
        </div>

        {activeSinger && (
          <div className="input-container">
            <textarea
              placeholder={`Enter lyrics as ${activeSinger}...`}
              value={currentInput}
              onChange={handleInputChange}
              className="textarea"
            />
          </div>
        )}

        <div className="display-box">{renderLyrics()}</div>
      </div>
    </div>
  );
};

export default CompleteLyrics;
