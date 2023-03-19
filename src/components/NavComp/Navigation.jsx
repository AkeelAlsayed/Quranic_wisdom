// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navigation.scss";

// function Navigation() {
//   const [colorMode, setColorMode] = useState(
//     localStorage.getItem("colorMode") || "light"
//   );

//   const toggleColorMode = () => {
//     console.log(document.body.classList);
//     if (colorMode === "light") {
//       setColorMode("dark");
//       localStorage.setItem("colorMode", "dark");
//       document.body.classList.add("dark-mode");
//     } else {
//       setColorMode("light");
//       localStorage.setItem("colorMode", "light");
//       document.body.classList.remove("dark-mode");
//     }
//   };

//   return (
//     <nav className="Nav-bar">
//       <ul>
//         <li>
//           <Link to="/">
//             <p>Home</p>
//           </Link>
//         </li>
//         <li>
//           <Link to="/products">
//             <p>Products</p>
//           </Link>
//         </li>
//         <li>
//           <Link to="/about">
//             <p>About</p>
//           </Link>
//         </li>
//         <li>
//           <button onClick={toggleColorMode}>Change Color Mode</button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("colorMode") || "light"
  );

  const toggleColorMode = () => {
    if (colorMode === "light") {
      setColorMode("dark");
      localStorage.setItem("colorMode", "dark");
      document.body.classList.add("dark-mode");
    } else {
      setColorMode("light");
      localStorage.setItem("colorMode", "light");
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <nav className="Nav-bar">
      <ul>
        {/* <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li> */}
        <li>
          <Link to="/">
            <p>Products</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <button onClick={toggleColorMode}>Change Color Mode</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
