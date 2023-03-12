import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import ThumbUp from "@material-ui/icons/ThumbUpSharp";
import ThumbDownOutlined from "@material-ui/icons/ThumbUpOutlined";
import Share from "@material-ui/icons/ShareSharp";
import { LikeContext } from "../context/LikeContext/LikeContext";
import LikeCalls from "../context/LikeContext/LikeCalls";

export default function LikeView({item, data}) {
    const [isLiked, setIsLiked] = useState(item.isLiked);
    const { dispatch } = useContext(LikeContext);

    const handleLike = (e, item) => {
      e.preventDefault();
      if (item.isLiked) LikeCalls(data, dispatch, isLiked, item.id);
      else LikeCalls(data, dispatch, isLiked, item.id);
    //   item.isLiked = !item.isLiked;
      console.log("handleLike")
      setIsLiked(!isLiked);
    };

    const handleShare = (e, item) => {
      e.preventDefault();
      console.log("handleShare");
    };

  return (
    <Grid container className="parentVideo">
      <Typography
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={(e) => handleLike(e, item)}
          style={{ marginRight: "10px", padding: "-5px" }}
        >
          {isLiked ? <ThumbUp /> : <ThumbDownOutlined />} &nbsp;&nbsp;
          {item.likes > 1000
            ? (item.likes / 1000).toFixed(2) + "k"
            : item.likes}
        </Button>
        <Button style={{ cursor: "default", textTransform: "none" }}>
          Views :{" "}
          {item.views > 1000
            ? (item.views / 1000).toFixed(2) + "k"
            : item.views}
        </Button>
        <Typography>
          <Button
            style={{ textTransform: "none" }}
            onClick={(e) => handleShare(e, item)}
          >
            Share <hr /> <hr /> <Share />
          </Button>
        </Typography>
      </Typography>
    </Grid>
  );
}
