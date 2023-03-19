import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Ayah from "./AyahsComp/Ayah";

function ProductDetail() {
  const { Id } = useParams();
  const [surah, setSurah] = useState();
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
