/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PropagateLoader } from "react-spinners";

export const PrivateRoute = ({ children }) => {
	const { currentUser, isLoading } = useAuth();

	if (isLoading) {
		return (
			<div className="text-center">
				<PropagateLoader />
			</div>
		);
	}

	if (currentUser) {
		return children;
	}

	return <Navigate to="/login" replace />;
};
