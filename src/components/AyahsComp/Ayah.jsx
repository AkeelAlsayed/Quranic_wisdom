// import React, { useState, useEffect } from "react";

// function Ayah({ verse, index }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   useEffect(() => {
//     if (isPlaying) {
//       const audio = document.querySelector(
//         `audio[data-index="${currentAudioIndex}"]`
//       );
//       audio.play();
//     }
//   }, [isPlaying, currentAudioIndex]);

//   const handleAudioEnd = () => {
//     if (isPlaying && currentAudioIndex === index) {
//       setCurrentAudioIndex((prev) => prev + 1);
//       console.log(currentAudioIndex);
//     } else {
//       setIsPlaying(false);
//     }
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//     setCurrentAudioIndex(index);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     audio.pause();
//   };

//   return (
//     <div className={`verse ${verse.number}`}>
//       {verse.text}
//       <audio src={verse.audio} onEnded={handleAudioEnd} data-index={index} />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   );
// }

// export default Ayah;
// import React, { useState, useEffect } from "react";

// function Ayah({ verse, index }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   const [activeAudioIndex, setActiveAudioIndex] = useState(null);

//   useEffect(() => {
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//     audio.addEventListener("ended", handleAudioEnd);
//     return () => audio.removeEventListener("ended", handleAudioEnd);
//   }, [currentAudioIndex, isPlaying]);

//   const handleAudioEnd = () => {
//     setCurrentAudioIndex((prevIndex) => prevIndex + 1);
//     setIsPlaying(true);
//   };

//   const handlePlay = () => {
//     setIsPlaying(false);

//     setCurrentAudioIndex(index);
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     audio.pause();
//   };

//   return (
//     <div className={`verse ${verse.number}`}>
//       {verse.text}
//       <audio
//         key={index}
//         src={verse.audio}
//         data-index={index}
//         controls={currentAudioIndex === index ? true : false}
//       />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       {console.log(index)}
//     </div>
//   );
// }

// export default Ayah;

// import React, { useState, useEffect } from "react";

// function Ayah({ ayahsArray, verse, index }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   // const [isControls, setIsControls] = useState(false);

//   const [currentAudioIndex, setCurrentAudioIndex] = useState(index);
//   // console.log(verse);
//   useEffect(() => {
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     if (isPlaying) {
//       audio?.play();
//     } else {
//       audio?.pause();
//     }

//     audio?.addEventListener("ended", handleAudioEnd);
//     return () => audio?.removeEventListener("ended", handleAudioEnd);
//   }, [currentAudioIndex, isPlaying]);

//   const handleAudioEnd = () => {
//     setCurrentAudioIndex((prevIndex) => prevIndex + 1);
//     setIsPlaying(true);
//   };

//   const handlePlay = (e) => {
//     e.preventDefault();

//     //Stop current audio before playing the new one

//     // console.log(currentAudioIndex);
//     // console.log(index);

//     // if (currentAudioIndex !== index) {
//     //   const audio = document.querySelector(
//     //     `audio[data-index="${currentAudioIndex}"]`
//     //   );
//     //   audio.pause();
//     //   audio.currentTime = 0;
//     // }
//     const audios = document.querySelectorAll(
//       `audio:not([data-index="${currentAudioIndex}"])`
//     );
//     audios.forEach((audio) => {
//       audio.pause();
//       audio.currentTime = 0;
//     });
//     setCurrentAudioIndex(index);
//     // handleStop(e);
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     audio.pause();
//   };
//   // const controlsFunc = () => {
//   //   if (currentAudioIndex === index && isPlaying) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // };
//   function handleRestart(e) {
//     e.preventDefault();
//     const audio = document.getElementsByTagName("audio")[index];
//     audio.pause();
//     audio.currentTime = 0;
//     audio.play();
//   }
//   function handleVolumeChange(e) {
//     e.preventDefault();
//     const audio = document.getElementsByTagName("audio")[0];
//     audio.volume = e.target.value;
//   }

//   // const controls = currentAudioIndex === index && isPlaying ? true : false;

//   return (
//     <div className={`verse ${verse.number}`}>
//       {verse.text}
//       <audio
//         className="audio"
//         key={index}
//         src={verse.audio}
//         data-index={index}
//         controls={true}
//         onEnded={() => console.log("ënded")}
//         onPlay={handlePlay}
//         style={{
//           width: "100%",
//           margin: "50px auto",
//           padding: "0",
//           border: "none",
//           outline: "none",
//           boxShadow: "0px 0px 20px 10px",
//           backgroundColor: "lightgray",
//           borderRadius: "10px",
//           display: "block",
//         }}
//       />
//       {/* <input
//         type="range"
//         min="0"
//         max="1"
//         step="0.1"
//         onChange={handleVolumeChange}
//       /> */}

//       <button onClick={handleRestart}>Restart</button>
//       {/* <button onClick={handleStop}>Stop</button> */}
//     </div>
//   );
// }

// export default Ayah;

import React, { useState, useEffect } from "react";
// import Audio from "../AudioPlayerComp/AudioPlayer";
import "./Ayah.scss";

function Ayah({ surah, verse, index, Id}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentAudioIndex, setCurrentAudioIndex] = useState(index);

  // const [audioProgress, setAudioProgress] = useState(0);

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
  // currentAudioIndex
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

    // test ended
    // setAudioProgress(audio.duration);
    // console.log(audio.duration);
    // Create an interval to update the slider value every 50 milliseconds
    // let intervalId = setInterval(() => {
    //   let slider = document.querySelector(
    //     `input[data-index="${currentAudioIndex}"]`
    //   );
    //   slider.value = audio.currentTime;
    // }, 50);

    // // Clear the interval when the audio ends
    // audio.addEventListener("ended", () => clearInterval(intervalId));
  };
  // console.log(surah.edition.language);

  // console.log(surahTranslated)
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
    // audio.play();
  }
  // console.log(surah);

  // const handleAudioTimeUpdate = (event) => {
  //   console.log(event);
  //   const { currentTime, duration } = event.target;
  //   setAudioProgress((currentTime / duration) * 100);
  // };
  // console.log(surahTranslated)
  let text;
  if (
    verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") &&
    Id != 1
  ) {
    text = verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "");
  } else {
    text = verse.text;
  }
  // const bismie = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
  return (
    <div className={`verse ${verse.number}`}>
      {/* <p>{verse.number == 1 && verse.text}</p> */}
      {/* <p>{verse.text !=="بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" && bismie   } </p> */}
      {/* <p>{ayahsArray.edition.language}</p> */}
      <div>Recitation language :{surah.edition.language}</div>
      <p>{text}</p>
      {/* {Id !== 1 && verse.number==8 ? text:"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"} */}
      {/* {verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
        ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
        : verse.text} */}
      {/* {isPlaying ? (
        <button className="restart-button" onClick={handlePause}>
          Pause
        </button>
      ) : (
        <button className="restart-button" onClick={handlePlay}>
          Play
        </button>
      )}
      <button className="restart-button" onClick={handleRestart}>
        Restart
      </button> */}
      <audio
        className="audio"
        key={index}
        src={verse.audio}
        data-index={index}
        controls={true}
        onPlay={handlePlay}

        // style={{ display: "hidden", background: "blue" }}
        // style={{
        //   width: "80%",
        //   margin: "50px auto",
        //   padding: "23px",
        //   border: "none",
        //   outline: "none",
        //   boxShadow: "0px 0px 20px 10px",
        //   backgroundColor: "lightgray",
        //   borderRadius: "50px",
        //   display: "block",
        //   position: "relative",
        //   top: "-20px",
        //   left: "50%",
        //   transform: "translateX(-50%)",
        //   transition: "all 0.3s ease",
        //   "&:hover": {
        //     top: "-30px",
        //     boxShadow: "0px 0px 30px 20px",
        //     transform: "scale(1.05) translateX(-50%)",
        //   },
        //   "&:active": {
        //     top: "-40px",
        //     boxShadow: "0px 0px 40px 30px",
        //     transform: "scale(1.1) translateX(-50%)",
        //   },
        // }}
      />
      {/* <Audio
        source={verse.audio}
        index={index}
        currentAudioIndex={currentAudioIndex}
      /> */}
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
