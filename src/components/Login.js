import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userAVATAR } from '../utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const message = ValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // if()
    if (!isSignInForm) {
      //SignUp form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //Upadting a User Details
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: userAVATAR,
          })
            .then(() => {
              const {email,displayName,uid,photoURL} = auth.currentUser;
              dispatch(addUser({email,displayName,uid,photoURL}))
               navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error)
            });
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //SignIn form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleToogleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white opacity-90"
      >
        <p className="text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</p>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-500"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-500"
        />
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button onClick={handleSubmit} className="p-4 my-6 bg-red-700 w-full ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleToogleForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? LogIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
