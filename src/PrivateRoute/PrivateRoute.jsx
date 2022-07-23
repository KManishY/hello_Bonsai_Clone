import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
	const { state } = useContext(AuthContext);
	if (!state.isAuth) {
		return <Navigate to="/login" />;
	}
	return children;
};

export default PrivateRoute;
