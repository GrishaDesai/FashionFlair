import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    return currentUser.isAdmin ? <Outlet /> : <Navigate to="/home" />;
}

export default PrivateRoute;