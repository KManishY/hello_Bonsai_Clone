import React, { useState, createContext } from "react";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const [state, setState] = useState({
		isAuth: false,
		token: null,
	});

	function handleLogin(token) {
		setState({
			...state,
			token: token,
			isAuth: true,
		});
	}

	function handleLogout(token) {
		setState({
			...state,
			token: null,
			isAuth: false,
		});
	}

	return (
		<AuthContext.Provider value={{ state, handleLogout, handleLogin }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
