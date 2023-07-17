import { Search } from "../assets/styles/icons";
import { Notification } from "../assets/styles/icons";
import "../containers/navbar.scss";
import User from "../assets/images/icons/user-for-navbar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar__h2">Tickets</h2>
      <div className="navbar__BOX">
        <div className="navbar__iconsBox">
          <span>
            <Search />
          </span>
          <span>
            <Notification />
          </span>
        </div>
        <div className="navbar__userBox">
          <h4>Jones Ferdinand</h4>
          <div className="navbar__userBoxRadius">
            <img src={User} alt="user rasm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
