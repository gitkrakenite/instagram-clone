import React, { useEffect, useState } from "react";
import Statusview from "../utility/Statusview";
import "./feed.css";
import Posts from "./Posts";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Feed() {
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([]);
  const [myinput, setMyinput] = useState("");
  const [myphoto, setMyphoto] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const setter = () => {
    if (toggle === true) {
      setToggle(false);
    } else setToggle(true);
  };

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: myinput,
      photoUrl: myphoto,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMyinput("");
    setMyphoto("");
  };

  return (
    <div className="feed">
      {toggle && (
        <div className="feed__createPost">
          <form>
            <input
              value={myinput}
              onChange={(e) => setMyinput(e.target.value)}
              type="text"
              placeholder="Enter Text"
            />
            <hr style={{ width: "80%" }} />
            <input
              value={myphoto}
              onChange={(e) => setMyphoto(e.target.value)}
              type="text"
              placeholder="Image Url"
            />
            <button onClick={sendPost} type="submit" />
          </form>
        </div>
      )}

      {/*  */}
      <div className="createIcon" title="Create a Post" onClick={setter}>
        <CreateOutlinedIcon />
      </div>
      <div className="feed__status">
        <Statusview image="https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Statusview image="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Statusview image="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Statusview image="https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Statusview image="https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Statusview
          image="https://images.pexels.com/photos/2088208/pexels-photo-2088208.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="mediaRemove"
        />
      </div>

      {/*  */}
      <div className="feed__posts">
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            likes={223}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
