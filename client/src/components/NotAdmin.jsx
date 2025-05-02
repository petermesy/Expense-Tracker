import React from "react";
import Spotify from "../assets/spotify.png"

const NotAdmin = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"column",
        margin:"20px",

        
    }}>
        <h1 className="text-danger">You are not an Admin</h1>
        <img alt="NotAdmin" className="img-fluid mb-3"
        src={Spotify}/>
    </div>
  )
}

export default NotAdmin 