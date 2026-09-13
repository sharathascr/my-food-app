import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Restraurants from "./pages/Restraurants.jsx";
import Restraurant from "./pages/Restaurant.jsx";
import SearchRestraurants from "./pages/SearchRestraurants.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/restraurants" element={<Restraurants />} />
      <Route path="/restraurant/:restraurantId" element={<Restraurant />} />
      <Route
        path="/searchRestraurant/:cusinie"
        element={<SearchRestraurants />}
      />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRouter;
