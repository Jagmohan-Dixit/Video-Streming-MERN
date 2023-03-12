import React, { useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import video1 from "../videos/video1.mov";
import video2 from "../videos/video2.mov";
import video3 from "../videos/video3.mov";
import video4 from "../videos/video4.mov";
import video5 from "../videos/video5.mov";
import Poster from "../videos/musicimage.jpg";
import { useState } from "react";
import LikeView from "./LikeView";
import LikeReducer from "../context/LikeContext/LikeReducer";
import { LikeContext } from "../context/LikeContext/LikeContext";


const SongsList = () => {
  const navigate = useNavigate();
  const { item } = useContext(LikeContext);
  const handleClick = (e, song) => {
    e.preventDefault();
    navigate("player", {
      state: {
        item: song,
        data: item,
      },
    });
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
      <h2 className="parentVideo">My Video Songs</h2>
        <Grid container spacing={2} style={{ padding: "20px" }}>
          {item && item.map((data) => {
            return (
              <Grid key={data.title} item xs={12} sm={6} md={3} lg={3}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleClick(e, data)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "-15px",
                  }}
                >
                  <h3>{data.title}</h3>
                </div>
                <LikeView item={data} data={item} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default SongsList;
