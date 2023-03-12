import { Link, useLocation, useNavigate } from "react-router-dom";
import "./watch.css";
import Navbar from "./Navbar";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import LikeView from "./LikeView";
import Comment from "./Comment";
import { useEffect } from "react";

export default function Player() {
  const { state } = useLocation();
  const item = state?.item;
  const data = state?.data;
  const navigate = useNavigate();

  useEffect(() => {
    if(!item) setTimeout(() => {
      navigate('/');
    }, 1500)
  }, [])

  return (
    <>
      {item && (
        <div className="head">
          <Navbar />
          <div className="parentVideo">
            <h2 style={{ textDecoration: "underline" }}>
              Song Name - <span style={{ color: "rgb(139,69,19)" }}>{item.title}</span>
            </h2>
          </div>
          <Grid
            container
            className="parentVideo"
            style={{ marginBottom: "15px" }}
          >
            <Grid item xs={10} sm={6} md={5} lg={5} style={{ height: "90vh" }}>
              <video
                className="video"
                autoPlay
                progress
                controls
                src={item.video}
              />
            </Grid>
          </Grid>
          <LikeView item={item} data={data} />
          <Comment data={data} item={item} />
        </div>
      )}
      {!item && 
      <div style={{alignItems: 'center'}}>
        <Navbar />
        <div className="parentVideo">
        <h2>Cannot Acces This Page's Content Without Clicking On Video</h2>
        </div>
        <div className="parentVideo">
        <h2>Wait!!  We are Redirecting you to Home Page</h2>
        </div>
      </div>      
      }
    </>
  );
}
