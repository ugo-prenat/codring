import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Rewards(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className={`component`}>
      <p>Récompenses</p>
    </div>
  );
}