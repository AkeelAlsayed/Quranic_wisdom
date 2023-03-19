import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Products.scss";

function ProductList() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then(({ data: { data } }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <h1 style={{ fontSize: "10rem" }}>Loading...</h1>;
  }

  return (
    <div className="product-grid">
      <header className="product-header">
        {data &&
          data.map((oneData) => (
            <div key={oneData.number}>
              <h1
                className="product-name"
                onClick={() => navigate(`/Products/${oneData.number}`)}
              >
                {oneData.name}
              </h1>
            </div>
          ))}
      </header>
    </div>
  );
}

export default ProductList;
