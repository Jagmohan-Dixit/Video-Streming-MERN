import LikeReducer from "./LikeReducer";
import { createContext, useEffect, useReducer } from "react";
import video1 from "../../videos/video1.mov";
import video2 from "../../videos/video2.mov";
import video3 from "../../videos/video3.mov";
import video4 from "../../videos/video4.mov";
import video5 from "../../videos/video5.mov";
import video6 from "../../videos/Kahani Suno 2.0 - Kaifi Khalil.mp4";
import video7 from "../../videos/Thug Love - Inderr.mp4"

import Poster from "../../videos/musicimage.jpg";

const res = [
    {
      id : 1,
      title: "Manga Jo Mera Hai",
      video: video1,
      image: Poster,
      likes: 20,
      views: 20000,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 2,
      title: "Hamari Adhuri Kahani",
      video: video2,
      image: Poster,
      likes: 355,
      views: 35300,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 3,
      title: "Mere Sapno Ki Galiyo Mein",
      video: video3,
      image: Poster,
      likes: 365,
      views: 65400,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 4,
      title: "Ab Hai Samne",
      video: video4,
      image: Poster,
      likes: 785,
      views: 83856,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 5,
      title: "Maiyya Menu Yaad Aave",
      video: video5,
      image: Poster,
      likes: 5678,
      views: 36388,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 6,
      title: "Kahani Suno Kaifi Khali",
      video: video6,
      image: Poster,
      likes: 535,
      views: 5345,
      comments: [{
        title: "Good",
        replies: ["Reply 1 from User1", "Reply from User2"],
        likes: 4,
      }],
      isLiked : false,
    },
    {
      id : 7,
      title: "Thug Love Inderr",
      video: video7,
      image: Poster,
      likes: 432,
      views: 52545,
      comments: [{
        title: "Good",
        replies: [],
        likes: 4,
      }],
      isLiked : false,
    },
  ];

const INITIAL_STATE = {
    item : res,
  };
  

export const LikeContext = createContext(INITIAL_STATE);

export const LikeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(LikeReducer, INITIAL_STATE);

    return (
        <LikeContext.Provider
          value={{
            item : state.item,
            dispatch,
          }}
        >
           {children}
        </LikeContext.Provider>
    )
};