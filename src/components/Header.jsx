import "./header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import OptionIcon from "../utility/OptionIcon";
import HomeIcon from "@mui/icons-material/Home";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__logoSide">
        <h2>Instagram</h2>
        <KeyboardArrowDownIcon />
      </div>

      <div className="header__Search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__finalside">
        <OptionIcon image="https://img.icons8.com/material-outlined/344/home--v4.png" />
        <OptionIcon image="https://img.icons8.com/ios/344/facebook-messenger--v1.png" />

        <OptionIcon image="https://img.icons8.com/material-outlined/344/compass.png" />
        {/* <OptionIcon image="https://img.icons8.com/ios-glyphs/344/like--v2.png" /> */}

        <Avatar
          onClick={logOutOfApp}
          style={{ cursor: "pointer" }}
          src={user?.photoUrL}
          className="avatar__header"
        >
          {user?.email[0]}
        </Avatar>
      </div>
    </div>
  );
}

export default Header;
