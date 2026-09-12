import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Restraurants from "./pages/Restraurants";
import Restraurant from "./pages/Restraurant";
import SearchRestraurants from "./pages/SearchRestraurants";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile/>}/>
      </Route>
      <Route path="/restraurants" element={<Restraurants />} />
      <Route path="/restraurant/:restraurantId" element={<Restraurant />} />
      <Route path="/searchRestraurant/:cusinie" element={<SearchRestraurants />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRouter;
