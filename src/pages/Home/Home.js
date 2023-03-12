import React, { useEffect, useRef, useState } from "react";
import SongsList from "../../components/SongsList";
import Navbar from "../../components/Navbar";


const Home = () => {
  const [data, setData] = useState("");
  
  return (
    <div className="head">
      <Navbar />
      <SongsList />
    </div>
  );
};

export default Home;
