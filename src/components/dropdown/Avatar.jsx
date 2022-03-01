import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {UseDetectOutsideClick} from './UseDetectOutsideClick'
import './style.css'
import { Context } from '../../context'
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

export default function Avatar() {
    const onClick = () => setIsActive(!isActive);
    const navigate = useNavigate()
    const dropdownRef = useRef(null);
    const {user} = useContext(Context)
    const [isActive, setIsActive] = UseDetectOutsideClick(dropdownRef, false);
    const handleLogout = () => {
        signOut(auth);
        navigate('/')
      };
  return (
    <div className="container">
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                    {user.displayName}
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        src={user.photoURL}
                        alt="User avatar"
                    />
                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        <li>
                            <Link to="/setting">Setting</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
  )
}
