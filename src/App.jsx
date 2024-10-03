import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [lyrics, setLyrics] = useState({
    firstSinger: [],
    secondSinger: [],
    thirdSinger: [],
    fourthSinger: [],
  });

  const [selectedSinger, setSelectedSinger] = useState("firstSinger");
  const [inputValue, setInputValue] = useState("");

  const handleSingerClick = (singer) => {
    addCurrentInputToLyrics();
    setSelectedSinger(singer);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addCurrentInputToLyrics();
    }
  };

  const addCurrentInputToLyrics = () => {
    if (inputValue.trim()) {
      setLyrics((prevLyrics) => ({
        ...prevLyrics,
        [selectedSinger]: [...prevLyrics[selectedSinger], inputValue],
      }));
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="app-container">
      <h1>Complete the Lyrics</h1>
      <div className="button-container">
        <button
          onClick={() => handleSingerClick("firstSinger")}
          className={`singer-button ${
            selectedSinger === "firstSinger" ? "selected first-singer" : "first-singer"
          }`}
        >
          FIRST SINGER
        </button>
        <button
          onClick={() => handleSingerClick("secondSinger")}
          className={`singer-button ${
            selectedSinger === "secondSinger" ? "selected second-singer" : "second-singer"
          }`}
        >
          SECOND SINGER
        </button>
        <button
          onClick={() => handleSingerClick("thirdSinger")}
          className={`singer-button ${
            selectedSinger === "thirdSinger" ? "selected third-singer" : "third-singer"
          }`}
        >
          THIRD SINGER
        </button>
        <button
          onClick={() => handleSingerClick("fourthSinger")}
          className={`singer-button ${
            selectedSinger === "fourthSinger" ? "selected fourth-singer" : "fourth-singer"
          }`}
        >
          FOURTH SINGER
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange} 
          onKeyDown={handleKeyDown}
          className="lyrics-input"
        />
      </div>
      <div className="lyrics-container">
        {Object.keys(lyrics).map((singer) => (
          <div key={singer}>
            {lyrics[singer].map((line, index) => (
              <div
                key={index}
                className={`lyric-box ${
                  singer === "firstSinger"
                    ? "first-singer"
                    : singer === "secondSinger"
                    ? "second-singer"
                    : singer === "thirdSinger"
                    ? "third-singer"
                    : "fourth-singer"
                }`}
              >
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
