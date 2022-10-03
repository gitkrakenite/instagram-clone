import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./posts.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import CircleIcon from "@mui/icons-material/Circle";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Posts({ name, likes, description, message, photoUrl }) {
  const [like, setLike] = useState(false);

  const user = useSelector(selectUser);

  const likePost = () => {
    if (like === false) {
      setLike(true);
    } else setLike(false);
  };
  return (
    <div className="posts">
      <div className="posts__header">
        <div className="posts__headerFirst">
          <Avatar src={photoUrl || user?.email[0]} />
          <div>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        </div>
        <MoreHorizIcon style={{ cursor: "pointer" }} />
      </div>
      {/*  */}
      <div className="posts__image">
        <img src={photoUrl} alt="post" />
      </div>
      {/*  */}
      <div className="posts__commentIcons">
        <div className="posts__firstlevel">
          <div onClick={likePost} style={{ marginTop: "1px" }}>
            {like ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </div>
          <CommentIcon />
          <SendIcon />
        </div>
        <div className="posts__midlevel">
          <CircleIcon style={{ color: "#446ac9" }} />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
        </div>
        <div>
          <BookmarkBorderOutlinedIcon />
        </div>
      </div>
      <div className="posts__likes">
        <p>
          Liked by <span className="active__user">Juma Hassan</span> and {likes}{" "}
          others
        </p>
        <h5>{message}</h5>
        <span className="posts__comment">View all 13 comments</span>
        <h6>4 HOURS AGO</h6>
      </div>

      <hr
        style={{ backgroundColor: "#e8e9eb", height: "2px", border: "none" }}
      />

      <div className="posts__createComment">
        <div className="createComment__text">
          <TagFacesOutlinedIcon />
          <input type="text" placeholder="Add a comment ..." />
        </div>
        <span>Post</span>
      </div>
    </div>
  );
}

export default Posts;
