// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Ayah from "./AyahsComp/Ayah";

// function ProductDetail() {
//   const { Id } = useParams();
//   const [surah, setSurah] = useState();
//   const [audioEditions, setAudioEditions] = useState([]);
//   const [translation, setTranslation] = useState([]);
//   const [selectedEdition, setSelectedEdition] = useState("ar.alafasy");

//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${Id}/${selectedEdition}`)
//       .then((response) => {
//         setSurah(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     axios
//       .get("https://api.alquran.cloud/v1/edition/format/audio")
//       .then((response) => {
//         setAudioEditions(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     axios
//       .get("https://api.alquran.cloud/v1/surah/114/editions/quran-uthmani,en.asad,en.pickthall,az.mammadaliyev")
//       .then((response) => {
//         setTranslation(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }, [Id, selectedEdition]);

//   console.log(translation);
//   const handleEditionChange = (event) => {
//     setSelectedEdition(event.target.value);
//   };
//   return (
//     <div className="verse_wrapper">
//       <div className="audio_edition_dropdown">
//         <label htmlFor="audio_edition">Select an audio edition:</label>
//         <select id="audio_edition" onChange={handleEditionChange}>
//           {/* <option value="ar.alafasy">ar.alafasy</option> */}
//           {audioEditions.map((edition) => (
//             <option key={edition.identifier} value={edition.identifier}>
//               {`${edition.englishName} ${edition.name}`}
//             </option>
//           ))}
//         </select>
//       </div>
//       <h1>{surah?.name}</h1>
//       {Id !== 1 && <h1>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>}
//       {surah?.ayahs.map((verse, index) => (
//         <Ayah
//           key={verse.number}
//           verse={verse}
//           index={index}
//           surah={surah}
//           Id={Id}
//         />
//       ))}
//       {/* {verseWrapperRef?.current} */}
//     </div>
//   );
// }

// export default ProductDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ayah from "./AyahsComp/Ayah";

function ProductDetail() {
  const { Id } = useParams();
  const [surah, setSurah] = useState();
  const [surahWithTranslation, setSurahWithTranslation] = useState();
  const [audioEditions, setAudioEditions] = useState([]);
  const [translationEditions, setTranslationEditions] = useState([]);
  const [selectedAudioEdition, setSelectedAudioEdition] =
    useState("ar.alafasy");
  const [selectedTranslationEditions, setSelectedTranslationEdition] = useState(
    []
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response1 = await axios.get(
  //         `https://api.alquran.cloud/v1/surah/${Id}/${selectedAudioEdition}`
  //       );
  //       setSurah(response1.data.data);

  //       const response2 = await axios.get(
  //         "https://api.alquran.cloud/v1/edition/format/audio"
  //       );
  //       setAudioEditions(response2.data.data);

  //       const response3 = await axios.get(
  //         `https://api.alquran.cloud/v1/surah/114/editions/quran-uthmani,${selectedTranslationEdition}`
  //       );
  //       setSurahWithTranslation(response3.data.data);

  //       const response4 = await axios.get(
  //         "http://api.alquran.cloud/v1/edition/type/translation"
  //       );
  //       setTranslationEditions(response4.data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [Id, selectedAudioEdition]);
  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const [
          surahResponse,
          audioEditionsResponse,
          translationResponse,
          translationEditionsResponse,
        ] = await Promise.all([
          axios.get(
            `https://api.alquran.cloud/v1/surah/${Id}/${selectedAudioEdition}`
          ),
          axios.get("https://api.alquran.cloud/v1/edition/format/audio"),
          axios.get(formatTranslationUrl(selectedTranslationEditions)),
          axios.get("http://api.alquran.cloud/v1/edition/type/translation"),
        ]);
        setSurah(surahResponse.data.data);
        setAudioEditions(audioEditionsResponse.data.data);
        setSurahWithTranslation(translationResponse.data.data);
        setTranslationEditions(translationEditionsResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSurahData();
  }, [Id, selectedAudioEdition, selectedTranslationEditions]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.alquran.cloud/v1/surah/${Id}/${selectedAudioEdition}`)
  //     .then((response) => {
  //       setSurah(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get("https://api.alquran.cloud/v1/edition/format/audio")
  //     .then((response) => {
  //       setAudioEditions(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get(
  //       `https://api.alquran.cloud/v1/surah/114/editions/quran-uthmani,${selectedTranslationEdition}`
  //     )
  //     .then((response) => {
  //       setSurahWithTranslation(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   axios
  //     .get("http://api.alquran.cloud/v1/edition/type/translation")
  //     .then((response) => {
  //       // console.log(response.data.data);
  //       setTranslationEditions(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [Id, selectedAudioEdition]);

  // console.log(translationEditions);
  console.log(selectedTranslationEditions);
  const formatTranslationUrl = (selectedTranslationEditions) => {
    // Join the selected translation editions with a comma
    const formattedEditions = selectedTranslationEditions.join(",");

    // Return the formatted URL
    return `https://api.alquran.cloud/v1/surah/114/editions/quran-uthmani,${formattedEditions}`;
  };

  const handleAudioEditionChange = (event) => {
    setSelectedAudioEdition(event.target.value);
  };

  const handleTranslationEditionChange = (event) => {
    setSelectedTranslationEdition(event.target.value);
  };

  return (
    <div className="verse_wrapper">
      <div className="audio_edition_dropdown">
        <label htmlFor="audio_edition">Select an audio edition:</label>
        <select id="audio_edition" onChange={handleAudioEditionChange}>
          {audioEditions.map((edition) => (
            <option key={edition.identifier} value={edition.identifier}>
              {`${edition.englishName} ${edition.name}`}
            </option>
          ))}
        </select>
      </div>

      <div className="translation_edition_dropdown">
        <label htmlFor="translation_edition">Select a translation:</label>
        <select
          id="translation_edition"
          onChange={handleTranslationEditionChange}
        >
          {translationEditions?.map((edition) => (
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
          // translation={surahWithTranslation}
        />
      ))}

      {/* <Ayah /> */}
    </div>
  );
}

export default ProductDetail;
