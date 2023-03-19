import React, { useState, useEffect } from "react";
import "./AudioPlayer.scss";

function Audio({ source, index }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.querySelector(`audio[data-index="${index}"]`);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    if (isPlaying) {
      audio?.play();
    } else {
      audio?.pause();
    }
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  const handlePlay = (e) => {
    // e.preventDefault();
    // const audio = document.querySelector(`audio[data-index="${index}"]`);
    // audio.play();
    // setIsPlaying(true);
    e.preventDefault();
    const audios = document.querySelectorAll(
      `audio:not([data-index="${index}"])`
    );
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    // setCurrentAudioIndex(index);
    setIsPlaying(true);
    // this is just a test
    const audio = document.querySelector(
      `audio[data-index="${index}"]`
    );
    audio.play();
  };

  const handlePause = () => {
    const audio = document.querySelector(`audio[data-index="${index}"]`);
    audio.pause();
    setIsPlaying(false);
  };

  const handleAudioEnd = () => {
    setIsPlaying(true);
    setCurrentTime(0);
  };

  const handleRestart = (e) => {
    e.preventDefault();
    const audio = document.querySelector(`audio[data-index="${index}"]`);
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const audio = document.querySelector(`audio[data-index="${index}"]`);
    audio.currentTime = (e.target.value * duration) / 100;
  };

  return (
    <div className="audio-container">
      <audio
        data-index={index}
        src={source}
        controls={false}
        onPlay={handlePlay}
      />
      <div className="controls">
        {isPlaying ? (
          <button className="pause-button" onClick={handlePause}>
            Pause
          </button>
        ) : (
          <button className="play-button" onClick={handlePlay}>
            Play
          </button>
        )}
        <button className="restart-button" onClick={handleRestart}>
          Restart
        </button>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />
    </div>
  );
}

export default Audio;
