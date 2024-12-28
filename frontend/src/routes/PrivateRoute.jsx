import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  
	const { currentUser } = useAuth();
	if (currentUser) {
		return children;
	}

	return <Navigate to="/login" replace />;
};
