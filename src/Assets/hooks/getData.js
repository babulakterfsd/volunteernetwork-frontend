import { useState, useEffect } from "react";

const GetData = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-shelf-43649.herokuapp.com/allpackages")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);
  return [packDetails];
};

export default GetData;
