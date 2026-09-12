import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/signin" />}</>;
}

export default PrivateRoute;
