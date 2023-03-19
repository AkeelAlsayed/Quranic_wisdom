// import React from "react";

// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();

//   const [isLoading, setIsLoading] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // const [verses, setVerses] = useState();
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   // console.log(verses.ayahs.length)
//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={true}
//           onEnded={handleAudioEnd}
//           // autoPlay={index === currentAudioIndex}
//           hidden={index !== currentAudioIndex}
//         />
//         {/* <p>{isPlaying ? "Playing..." : "Paused"}</p> */}
//       </div>
//     );
//   });
//   console.log(currentAudioIndex);
//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;

// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState ,audioRefs} from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();

//   const [isLoading, setIsLoading] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // const [verses, setVerses] = useState();
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   // console.log(verses.ayahs.length)
//   const handleAudioEnd = () => {
//     if(verses){
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//         audioRefs.current[currentAudioIndex].play();
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={true}
//           onEnded={handleAudioEnd}
//           autoPlay={index === currentAudioIndex && isPlaying}
//           hidden={index !== currentAudioIndex}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//       <button onClick={() => setIsPlaying(true)}>
//         {!isPlaying ? "Play" : "Pause"}
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRefs = useRef([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   useEffect(() => {
//     if(isPlaying && audioRefs.current[currentAudioIndex])
//       audioRefs.current[currentAudioIndex].play();
//   }, [currentAudioIndex,isPlaying]);

//   const handleAudioEnd = () => {
//     if(verses){
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           ref={el => (audioRefs.current[index] = el)}
//           src={verse.audio}
//           controls={false}
//           onEnded={handleAudioEnd}
//           autoPlay={index === currentAudioIndex && isPlaying}
//           hidden={index !== currentAudioIndex}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//       <button onClick={() => setIsPlaying(true)}>
//         {!isPlaying ? "Play" : "Pause"}
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;

// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRefs = useRef([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   const handleAudioEnd = () => {
//     if(verses){
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         audioRefs.current[currentAudioIndex].pause();
//         setCurrentAudioIndex(currentAudioIndex + 1);
//         audioRefs.current[currentAudioIndex].play();
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           ref={el => (audioRefs.current[index] = el)}
//           src={verse.audio}
//           controls={false}
//           onEnded={handleAudioEnd}
//           autoPlay={index === currentAudioIndex && isPlaying}
//           hidden={index !== currentAudioIndex}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {!isPlaying ? "Play" : "Pause"}
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   const [repeatCount, setRepeatCount] = useState(1); // added state to keep track of repeat count

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   // added function to handle repeat count change
//   const handleRepeatCountChange = (e) => {
//     setRepeatCount(e.target.value);
//   };

//   // added state to keep track of current repeat count
//   const [currentRepeatCount, setCurrentRepeatCount] = useState(repeatCount);
//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//         setCurrentRepeatCount(repeatCount); // reset repeat count when new ayah starts
//       } else if (isPlaying && currentAudioIndex === verses.ayahs.length - 1) {
//         setIsPlaying(false);
//       } else if (isPlaying && currentRepeatCount > 1) {
//         setCurrentRepeatCount(currentRepeatCount - 1);
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={true}
//           onEnded={handleAudioEnd}
//           hidden={index !== currentAudioIndex}
//         />
//         {/* added input to change repeat count */}
//         <input
//           type="number"
//           value={repeatCount}
//           onChange={handleRepeatCountChange}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;
// import React, { useRef } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
//   const [repeatCount, setRepeatCount] = useState(1);
//   const audioRefs = useRef([]); // added refs for audio elements

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   // added function to handle repeat count change
//   const handleRepeatCountChange = (e, index) => {
//     setRepeatCount(e.target.value);
//   };

//   // added state to keep track of current repeat count
//   const [currentRepeatCount, setCurrentRepeatCount] = useState(repeatCount);
//   const handleAudioEnd = (index) => {
//     if (verses) {
//       if (currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//         setCurrentRepeatCount(repeatCount); // reset repeat count when new ayah starts
//       } else if (currentAudioIndex === verses.ayahs.length - 1) {
//         // do nothing when the last ayah is reached
//       } else if (currentRepeatCount > 1) {
//         setCurrentRepeatCount(currentRepeatCount - 1);
//         audioRefs.current[index].currentTime = 0;
//         audioRefs.current[index].play();
//       }
//     }
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     audioRefs.current[index] = new Audio(verse.audio); // added refs for audio elements
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         {/* added input to change repeat count */}
//         <input
//           type="number"
//           value={repeatCount}
//           onChange={(e) => handleRepeatCountChange(e, index)}
//         />
//         <button
//           onClick={() => {
//             audioRefs.current[index].play();
//             setCurrentAudioIndex(index);
//           }}
//         >
//           Play
//         </button>
//         <button
//           onClick={() => {
//             audioRefs.current[index].pause();
//           }}
//         >
//           Pause
//         </button>
//         <button
//           onClick={() => {
//             audioRefs.current[index].currentTime = 0;
//             audioRefs.current[index].play();
//           }}
//         >
//           Replay
//         </button>
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       }
//     }
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//   }

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={true}
//           onEnded={handleAudioEnd}
//           hidden={index !== currentAudioIndex}
//           autoPlay={index === currentAudioIndex && isPlaying}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       <button onClick={handlePlay}>Play</button>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       } else {
//         setIsPlaying(false);
//       }
//     }
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={true}
//           onEnded={handleAudioEnd}
//           autoPlay={index === currentAudioIndex && isPlaying}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       } else {
//         setIsPlaying(false);
//       }
//     }
//   };
// console.log(currentAudioIndex)
//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio
//           src={verse.audio}
//           controls={false}
//           onEnded={handleAudioEnd}
//           autoPlay={index === currentAudioIndex && isPlaying}
//         />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;
// import React from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [verses, setVerses] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   useEffect(() => {
//     if (isPlaying) {
//       const audio = document.querySelector(
//         `audio[data-index="${currentAudioIndex}"]`
//       );
//       audio.play();
//     }
//   }, [isPlaying, currentAudioIndex]);

//   const handleAudioEnd = () => {
//     if (verses) {
//       if (isPlaying && currentAudioIndex < verses.ayahs.length - 1) {
//         setCurrentAudioIndex(currentAudioIndex + 1);
//       } else {
//         setIsPlaying(false);
//       }
//     }
//   };

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//     const audio = document.querySelector(
//       `audio[data-index="${currentAudioIndex}"]`
//     );
//     audio.pause();
//   };

//   const verseElements = verses?.ayahs.map((verse, index) => {
//     return (
//       <div key={verse.number} className={`verse ${verse.number}`}>
//         {Id != 1 &&
//         verse.text.includes("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ")
//           ? verse.text.replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
//           : verse.text}
//         <audio src={verse.audio} onEnded={handleAudioEnd} data-index={index} />
//       </div>
//     );
//   });

//   return (
//     <div className="verse_wrapper">
//       <h1>{verses?.name}</h1>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//       {verseElements}
//     </div>
//   );
// }

// export default ProductDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ayah from "./AyahsComp/Ayah";

// import { useRef } from "react";

function ProductDetail() {
  const { Id } = useParams();
  const [surah, setSurah] = useState();
  // const [CurrentPlayingayahs, setCurrentPlayingAyahs] = useState();
  const [audioEditions, setAudioEditions] = useState([]);
  const [translation, setTranslation] = useState([]);
  const [selectedEdition, setSelectedEdition] = useState("ar.alafasy");

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${Id}/${selectedEdition}`)
      .then((response) => {
        setSurah(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://api.alquran.cloud/v1/edition/format/audio")
      .then((response) => {
        setAudioEditions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://api.alquran.cloud/v1/edition/language/ar")
      .then((response) => {
        setTranslation(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Id, selectedEdition]);

  console.log(translation);

  // const verseWrapperRef = useRef(null);
  // console.log(surah);
  // const fixedSurah = surah?.map((verse) => {
  //   if (verse.text === "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ") {
  //     verse.text
  //   }
  // });
  const handleEditionChange = (event) => {
    setSelectedEdition(event.target.value);
  };
  return (
    <div className="verse_wrapper">
      <div className="audio_edition_dropdown">
        <label htmlFor="audio_edition">Select an audio edition:</label>
        <select id="audio_edition" onChange={handleEditionChange}>
          {/* <option value="ar.alafasy">ar.alafasy</option> */}
          {audioEditions.map((edition) => (
            <option key={edition.identifier} value={edition.identifier}>
              {`${edition.englishName} ${edition.name}`}
            </option>
          ))}
        </select>
      </div>
      <h1>{surah?.name}</h1>
      {Id !== 1 && <h1>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>}
      {surah?.ayahs.map((verse, index) => (
        <Ayah
          key={verse.number}
          verse={verse}
          index={index}
          surah={surah}
          Id={Id}
        />
      ))}

      {/* {verseWrapperRef?.current} */}
    </div>
  );
}

export default ProductDetail;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import axios from "axios";

// function ProductDetail() {
//   const { Id } = useParams();

//   const [verses, setVerses] = useState([]);
//   const [currentAudio, setCurrentAudio] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentVerse, setCurrentVerse] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/ar.alafasy`)
//       .then((response) => {
//         setVerses(response.data.data.ayahs);
//         console.log(response.data.data.ayahs[0]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [Id]);

//   const handlePlay = (audioSrc) => {
//     setCurrentAudio(audioSrc);
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   const handleEnded = () => {
//     if (currentVerse < verses.length - 1) {
//       setCurrentVerse(currentVerse + 1);
//       setCurrentAudio(verses[currentVerse + 1].audio);
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div>
//       {verses.length > 0 ? (
//         <div>
//           {verses?.map((verse, index) => (
//             <div key={index}>
//               <button onClick={() => handlePlay(verse.audio)}>
//                 {verse.number}
//               </button>
//               <span>{verse.text}</span>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//       <audio
//         src={currentAudio}
//         controls={true}
//         onEnded={handleEnded}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//       />
//       <button onClick={isPlaying ? handlePause : handlePlay}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// }

// export default ProductDetail;
