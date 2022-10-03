import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="main">
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
