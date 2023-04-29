import React, { useEffect, useRef, useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, sendPasswordResetEmail } from "firebase/auth";
import { auth, login } from "../firebase";
import "./Signin.css";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import db from "../firebase";

interface AuthContextType {
    googleSignIn: () => void;
    user: User;
}

const Signin = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [passwordResetError, setPasswordResetError] = useState(false);
    const { googleSignIn, user } = UserAuth() as AuthContextType;
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    
    async function handleEmailLogin() {
        setLoading(true);
        try {
            if (emailRef.current && passwordRef.current) {
                await login(emailRef.current.value, passwordRef.current.value);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false);
    }

    const handlePasswordReset = async () => {
        setError(false);
        try {
            await sendPasswordResetEmail(
                auth,
                emailRef.current?.value as string
            );
        } catch (error) {
            console.log(error);
            setPasswordResetError(true);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate("/");
        }
    }, [user]);

    return (
        <div className="signin-container">
            <div className="signin-form__container">
                <h1>Ready to Sign In?</h1>
                <form>
                    <input
                        className="signinEmail"
                        ref={emailRef}
                        placeholder="Email"
                    />
                    <input
                        className="signinPassword"
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="signinLogin"
                        disabled={loading}
                        onClick={handleEmailLogin}
                    >
                        Log In
                    </button>
                </form>
                {error && !passwordResetError ? (
                    <div style={{ color: "red", textAlign: "center" }}>
                        Email and/or Password are incorrect!
                        <button
                            className="resetPassword"
                            onClick={handlePasswordReset}
                        >
                            Reset Password
                        </button>
                    </div>
                ) : null}
                {passwordResetError ? (
                    <div style={{ color: "red", textAlign: "center" }}>
                        An account with this email does not exist!
                    </div>
                ) : null}
                <h2>OR</h2>
                <GoogleButton
                    className="signinInGoogleButton"
                    onClick={() => {
                        handleGoogleSignIn();
                    }}
                />
            </div>
        </div>
    );
};

export default Signin;