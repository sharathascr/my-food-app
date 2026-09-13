import "./styles/AppNavbar.css";
import navLogo from "./assets/nav-logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "./store/slices/AuthSlice";
import axios from "axios";
import { useEffect } from "react";
import { setCartCount } from "./store/slices/CartSlice.js";

function AppNavbar() {
  const { lastname, isAuthenticated } = useSelector((state) => state.auth);
  const { cartCount, cartIndex } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();

  const logoutHandler = async () => {
    const logoutResponse = await axios.post(
      "http://localhost:7777/auth/logout",
      {},
      { withCredentials: true },
    );
    if (logoutResponse.data.success) {
      dispatch(handleLogout());
      dispatch(setCartCount(0));
    }
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axios.get("http://localhost:7777/cart", {
          withCredentials: true,
        });
        dispatch(setCartCount(response.data.cartCount || 0));
      } catch (error) {
        console.error("Error fetching cart count:", error);
        dispatch(setCartCount(0));
      }
    };

    if (!isAuthenticated) {
      dispatch(setCartCount(0));
      return;
    }

    fetchCartCount();
  }, [isAuthenticated, cartIndex, location.pathname, dispatch]);

  return (
    <div className="navbar-container">
      <Link to="/" className="nav-logo">
        <img src={navLogo} alt="nav logo" className="nav-logo" />
      </Link>
      <div className="nav-items-section">
        <ul className="nav-items">
          {isAuthenticated && (
            <li>
              <Link className="nav-link" to="/profile">
                Mr. {lastname}
              </Link>
            </li>
          )}
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li>
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                type="button"
                className="nav-link logout-button"
                onClick={logoutHandler}
              >
                Signout
              </button>
            </li>
          )}

          <li>
            <Link className="nav-link" to="/cart">
              Cart{" "}
              {isAuthenticated && (
                <span className="cart-count">({cartCount})</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppNavbar;
