import { useState, useEffect } from "react";

const GetData = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);
  return [packDetails];
};

export default GetData;
