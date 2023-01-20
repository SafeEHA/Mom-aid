import React from "react";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    
    validateUsername(e);
    validatePassword(e);
    
    const validateLogin = (username, password) => {
      return true;
}
    if (validateLogin (username, password)){
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
      setIsLoggedIn(true);
  
    }
   
  };

  // const handleUsername = (e) => {
  //   validateUsername(e);
    
  // };

  const validateUsername = (e) => {
    const pattern = /^[a-zA-Z0-9]*$/;

    if (username.length < 4) {
      setUsernameError("Username must be atleast 4 characters long");
    }else if (!pattern.test(username)) {
      setUsernameError(
        "Username can only contain alphanumeric characters and should not include special characters or spaces."
      );
    } else {
      setUsernameError("");
    }
  };
  const handlePassword = (e) => {
    
   ;
  };
  const validatePassword = (e) => {
    const value = e.target.value;
    const pattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]{4,}$/;
    if (!pattern.test(value)) {
      setPasswordError(
        "Password must be at least 4 characters long, include at least 1 alphabet, 1 digit and 1 symbol."
      );
    } else {
      setPasswordError("");
    }
  };
  
 
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="title"> MOMAID</h1>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="field-title1">
              Username
            </label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              className="text-field1"
              placeholder=" not more than 8 characters"
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <p className={`error-message ${usernameError ? "show" : ""}`}>{usernameError}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="field-title2">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              className="text-field2"
              placeholder=" 4 - 8 characters"
              onChange={(e) => setPassword(e.target.value)}
          />
            {passwordError && (
              <p className={`error-message ${passwordError ? "show" : ""}`}>{passwordError}</p>
            )}
          </div>

          <button className="btn" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
