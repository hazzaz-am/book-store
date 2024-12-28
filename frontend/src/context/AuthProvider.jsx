/* eslint-disable react/prop-types */
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();


export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// user registration
	const handleUseRegister = async (email, password) => {
		return await createUserWithEmailAndPassword(auth, email, password);
	};

	// user sign in
	const handleUserSignin = async (email, password) => {
		return await signInWithEmailAndPassword(auth, email, password);
	};

	// sign in with google
	const signInWithGoogle = async () => {
		return await signInWithPopup(auth, googleProvider);
	};

	// user logout
	const handleLogOut = async () => {
		return await signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setIsLoading(false);

			if (user) {
				const { displayName, photoURL, email } = user;

				return {
					userName: displayName,
					photo: photoURL,
					email,
				};
			}
		});

		return () => unSubscribe();
	}, []);

	const value = {
		currentUser,
		isLoading,
		handleUseRegister,
		handleUserSignin,
		handleLogOut,
		signInWithGoogle,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
