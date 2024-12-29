/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export const AdminRoute = ({ children }) => {
	// this is not best practices
	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to="/admin" />;
	}
	return children ? children : <Outlet />;
};
