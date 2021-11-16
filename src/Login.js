import React from 'react'
import "./Login.css";

import {loginUrl} from "./spotify";
const Login = () => {
    return (
        <div className="login">
                  <img src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify-3.png" alt="" />

        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;

