import React, { useState, FormEvent, useEffect } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import "./SignIn.css";

interface SignInProps {
  user: User | null;
}

const SignIn: React.FC<SignInProps> = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully.");
    } catch (error) {
      alert(error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google successfully.");
    } catch (error) {
      alert(error);
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
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <h1>Don't have an account?</h1>
      <div className="link-container">
        <Link
          to="/SignUp"
          className="flex place-items-center p-2 hover:bg-udblue rounded-lg transition-all duration-300"
        >
          Sign Up!
        </Link>
      </div>
      <button className="signinLogin" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  </div>
  );
};

export default SignIn;
