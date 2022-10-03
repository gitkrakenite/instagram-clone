import React, { useState } from "react";
import "./login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      return alert("Name is required to register");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profile,
              })
            );
          })
          .catch((error) => alert(error));
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login__leftSide">
        <div className="login__leftImg">
          <img
            src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="login__leftImg2">
          <img
            src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>

      <div className="login__form">
        <div className="upperForm">
          <h3>Instagram</h3>
          <form>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Create a username"
            />
            <input
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              type="text"
              placeholder="Profile pic URL (optional)"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email required to sign in"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button type="submit" onClick={loginToApp}>
              Log In
            </button>
          </form>
          <div className="formMiddle">
            <div className="formSeparate"></div>
            <span>OR</span>
            <div className="formSeparate"></div>
          </div>

          <div className="login__Facebook">
            <FacebookIcon />

            <p>Forgot password?</p>
          </div>
        </div>

        <div className="bottomForm">
          <p>
            Don't have an account? <span onClick={register}>Sign up</span>
          </p>
        </div>

        <div className="loginFooter">
          <p>Get the app.</p>
          <div className="formDownloads">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt=""
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
