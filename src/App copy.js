// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BrowserRouter, Route, Link } from 'react-router-dom';

// function App() {
//   const [data, setData] = useState(); 
//   const [verses, setVerses] = useState();
//   useEffect(() => {
//     axios
//       .get("https://api.quran.com:443/api/v4/chapters")
//       .then((response) => {
//         // do something with the response data
//         // console.log(response.data.chapters);
//         setData(response.data.chapters);
//       })
//       .catch((error) => {
//         // handle the error
//         console.log(error);
//       });
//   }, []);

//   console.log(data);
//   function getSurah(id) {
//     console.log(id);
//     axios
//       .get(
//         `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`
//       )
//       .then((response) => {
//         // do something with the response data
//         // console.log(response.data.chapters);
//         setVerses(response.data.verses);
//         // setData(response.data.chapters);
//       })
//       .catch((error) => {
//         // handle the error
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {data &&
//           data.map((oneData) => {
//             return (
//               <div key={oneData.id}>
//                 <h1 onClick={() => getSurah(oneData.id)}>
//                   {oneData.name_arabic}
//                 </h1>
//                 {verses &&
//                     verses.map((verse) => {
//                       return <div> {verse.text_indopak}</div>;
//                     })}
//               </div>
//             );
//           })}
//       </header>
//     </div>
//   );
// }

// export default App;
