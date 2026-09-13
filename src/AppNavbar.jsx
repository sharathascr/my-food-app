import "./styles/AppNavbar.css";
import navLogo from "./assets/nav-logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "./store/slices/AuthSlice";
import axios from "axios";

function AppNavbar() {
  const { lastname, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    const logoutResponse = await axios.post(
      "http://localhost:7777/auth/logout",{},
      { withCredentials: true },
    );
    if (logoutResponse.data.success) {
      dispatch(handleLogout());
    }
  };
  return (
    <div className="navbar-container">
      <Link to="/" className="nav-logo">
        <img src={navLogo} alt="nav logo" className="nav-logo" />
      </Link>
      <div className="nav-items-section">
        <ul className="nav-items">
          {isAuthenticated && (
            <li>
              {" "}
              <Link to="/profile">Mr. {lastname}</Link>
            </li>
          )}
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isAuthenticated ? (
            <>
              {" "}
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <>
              <Link onClick={logoutHandler}>Signout</Link>
            </>
          )}

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNavbar;
