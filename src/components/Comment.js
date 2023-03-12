import React from 'react';
import { useRef, useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@material-ui/core";
import ThumbUp from '@material-ui/icons/ThumbUpSharp';
import ThumbDownOutlined from '@material-ui/icons/ThumbUpOutlined';
import Share from '@material-ui/icons/ShareSharp';
import SendSharp from '@material-ui/icons/SendSharp';
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";

const Comment = ({data, item}) => {
    const [input, setInput] = useState("");
  return (
    <div>
        <Grid container className='parentVideo' style={{marginBottom: "20px"}}>
          <Grid item xs={10} sm={8} md={5} lg={5} >
            <Typography className='parentVideo'>
              <TextField multiline={true} value={input} label="Comment" variant="standard" onChange={(e) => setInput(e.target.value)}
                placeholder="Add a comment...." className="input" />
              <Button onClick={() => { 
                item.comments.push({
                    title: input,
                    replies: [],
                    likes: 0,
                });
                setInput("");
              }}>
                <SendSharp color="primary" />
              </Button>
            </Typography>
            {item?.comments.map((comment) => {
              return (
                <Typography style={{marginBottom: "15px",marginLeft:"15px",}}>
                    <Typography style={{display:'flex',padding: "10px"}}>
                      <img src={item.image} style={{marginRight: "10px", width:"30px", height:"30px", borderRadius: "100px"}} />
                      <Typography className="parentVideo">
                        <Typography>{comment.title}</Typography>
                      </Typography>
                   </Typography>
                   <CommentFooter item={item} comment={comment} />
                </Typography>
              )
            })}
          </Grid>
        </Grid>
    </div>
  )
}

export default Comment;


const CommentFooter = ({item, comment, isOpen}) => {
    const [isLiked, setIsLiked] = useState(item.isLiked);
    const [replyBox, setReplyBox] = useState(false);
    const [replyComment, setReplyComment] = useState("");
    // const { dispatch } = useContext(LikeContext);

    const handleLike = (e, item) => {
      e.preventDefault();
    //   if (item.isLiked) LikeCalls(data, dispatch, isLiked, item.id);
    //   else LikeCalls(data, dispatch, isLiked, item.id);
    //   item.isLiked = !item.isLiked;
      if(!isLiked) comment.likes += 1;
      else comment.likes -= 1;
      console.log("handleCommentLike")
      setIsLiked(!isLiked);
    };
    return (
        <>
        <Typography
        style={{
          display: "flex",
          marginLeft: "30px",
        }}
      >
        <Button
          onClick={(e) => handleLike(e, item)}
          style={{ padding: "-5px" }}
        >
          {isLiked ? <ThumbUp /> : <ThumbDownOutlined />} &nbsp;&nbsp;
          {comment.likes > 1000
            ? (comment.likes / 1000).toFixed(2) + "k"
            : comment.likes}
        </Button>
        <Button onClick={() => setReplyBox(true)} style={{textTransform: "none" }}>
          Reply 
        </Button>
        {comment?.replies?.length > 0 && 
            <Button color='primary' style={{textTransform: 'none'}} 
              onClick={() => setReplyBox(!replyBox)} >
                See {comment.replies.length} Comments {replyBox ? <ArrowDropUp /> : <ArrowDropDown />}
            </Button>
        }
    </Typography>
    {replyBox &&
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <Grid item xs={10} sm={10} md={10} lg={10} style={{}}>
            <Typography className='parentVideo'>
            <TextField multiline={true} value={replyComment} label="Reply" variant="standard" onChange={(e) => setReplyComment(e.target.value)}
              placeholder="Add a reply...." className="input" />
            <Button onClick={() => { 
              comment.replies.push(replyComment);
              setReplyComment("");
            }}>
              <SendSharp color="primary" />
            </Button>
          </Typography>
          {comment?.replies.map((comment) => {
            return (
              <Typography style={{marginLeft:"10px"}}>
                  <Typography style={{display:'flex',padding: "5px"}}>
                    <img src={item.image} style={{marginRight: "10px", width:"30px", height:"30px", borderRadius: "100px"}} />
                    <Typography className="parentVideo">
                      <Typography>{comment}</Typography>
                    </Typography>
                 </Typography>
              </Typography>
            )
          })}
        </Grid>
      </div>
    }
    </>
    )
}