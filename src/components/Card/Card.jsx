import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

  const handleData = () => {
    setShowAll(true);
  };

  const handleShortByData = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setData([...data, sortedData]);
  };

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);
  // console.log(singleData);
  return (
    <div>
      <span onClick={handleShortByData}>
        <Button>Short-by-Data</Button>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 lg:px-10 gap-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          ></SingleData>
        ))}
      </div>
      {!showAll && (
        <span onClick={handleData}>
          <Button>She more</Button>
        </span>
      )}
      <Modal singleData={singleData}></Modal>
    </div>
  );
};

export default Card;
