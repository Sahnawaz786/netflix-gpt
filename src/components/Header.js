import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { netflixLOGO} from '../utils/constants'
import { addUser, removeUser } from "../utils/userSlice";
import { toogleGptBtn } from "../utils/gptSlice";
import store from "../utils/store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleGptBtn = ()=>{
    dispatch(toogleGptBtn());
  }

    useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,displayName,uid,photoURL} = user;
        dispatch(addUser({email,displayName,uid,photoURL}))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
  }, []);

  const toogleBtn = useSelector(store=>store.gpt.toggleGptSearchBtn)

  return (
    <div className="absolute  p-2 w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-48"
        src={netflixLOGO}
        alt="logo"
      />
      {user && (
        <>
       
        <div className="flex justify-center">
          <button onClick={toggleGptBtn} className="bg-purple-600 h-12 m-4 p-1 text-white">{
            toogleBtn ? "HomePage" : "GPT Search"}</button>
        
          <img src={user.photoURL} className="w-10 m-3 h-10 rounded" alt="user-logo" />
          <button
            onClick={handleSignOut}
            className="bg-red-600 p-1 m-3 font-bold text-white"
          >
            Sign Out
          </button>
        </div>
        </>
      )}
    </div>
  );
};

export default Header;
