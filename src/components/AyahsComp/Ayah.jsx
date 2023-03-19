import React, { useState, useEffect } from "react";
import "./Ayah.scss";

function Ayah({ surah, verse, index, Id, translation }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentAudioIndex, setCurrentAudioIndex] = useState(index);

  useEffect(() => {
    const audio = document.querySelector(
      `audio[data-index="${currentAudioIndex}"]`
    );
    if (isPlaying) {
      audio?.play();
    } else {
      audio?.pause();
    }
    audio?.addEventListener("ended", handleAudioEnd);
    return () => audio?.removeEventListener("ended", handleAudioEnd);
  }, [currentAudioIndex, isPlaying]);

  const handleAudioEnd = () => {
    setCurrentAudioIndex((prevIndex) => prevIndex + 1);
    setIsPlaying(true);
  };

  const handlePlay = (e) => {
    e.preventDefault();
    const audios = document.querySelectorAll(
      `audio:not([data-index="${currentAudioIndex}"])`
    );
    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    setCurrentAudioIndex(index);
    setIsPlaying(true);
    // this is just a test
    const audio = document.querySelector(
      `audio[data-index="${currentAudioIndex}"]`
    );
    audio.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    const audio = document.querySelector(
      `audio[data-index="${currentAudioIndex}"]`
    );
    audio.pause();
  };

  function handleRestart(e) {
    e.preventDefault();
    const audio = document.getElementsByTagName("audio")[index];
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }

  let text;
  if (
    verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") &&
    Id != 1
  ) {
    text = verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "");
  } else {
    text = verse.text;
  }
  return (
    <div className={`verse ${verse.number}`}>
      <div>Recitation language :{surah.edition.language}</div>
      <p>{text}</p>

      <audio
        className="audio"
        key={index}
        src={verse.audio}
        data-index={index}
        controls={true}
        onPlay={handlePlay}
      />

      <div className="wrapper">
        <div className="item">hizbQuarter {verse.hizbQuarter}</div>
        <div className="item">juz {verse.juz}</div>
        <div className="item">manzil {verse.manzil}</div>
        <div className="item">number {verse.number}</div>
        <div className="item">numberInSurah {verse.numberInSurah}</div>
        <div className="item">page {verse.page}</div>
        <div className="item">ruku {verse.ruku}</div>
        <div className="item">sajda {verse.sajda}</div>
      </div>
    </div>
  );
}

export default Ayah;
