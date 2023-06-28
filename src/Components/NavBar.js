import React from 'react'
import {Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <center>
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/create">create </Link>
        </div>
    </center>
    </>
  )
}
