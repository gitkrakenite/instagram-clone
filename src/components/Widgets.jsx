import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./widgets.css";

function Widgets() {
  const user = useSelector(selectUser);

  return (
    <div className="widgets">
      <div className="widget__header">
        <div className="widget__Avatar">
          <Avatar src={user?.profileUrl}> {user?.email[0]} </Avatar>
          <div>
            <p>{user.displayName}</p>
            <h5>{user.email}</h5>
          </div>
        </div>
        <span>Switch</span>
      </div>

      <div className="widget__midLevel">
        <p>Suggestions For You</p>
        <span>See All</span>
      </div>

      <div className="widgets__bottom">
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar style={{ cursor: "pointer" }} src="" />
            <div>
              <p>njagiAnitta33</p>
              <span>Followed by Gian + 2 more</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/5158233/pexels-photo-5158233.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>chrisTheOG201</p>
              <span>Suggested for you</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/3065016/pexels-photo-3065016.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>mercyMcute</p>
              <span>New to instagram</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/12122691/pexels-photo-12122691.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>elonMusk-official</p>
              <span>Suggested for you</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>devDanger404</p>
              <span>Followed by iangListo + 3 more</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/5211517/pexels-photo-5211517.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>hassanPediKayole</p>
              <span>New to instagram</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
        <div className="widget__avatarTree">
          <div className="widget__TreeItem">
            <Avatar
              style={{ cursor: "pointer" }}
              src="https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div>
              <p>kylaStephane</p>
              <span>Suggested for you</span>
            </div>
          </div>
          <h5>Follow</h5>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Widgets;
