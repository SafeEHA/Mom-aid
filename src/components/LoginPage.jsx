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

    const validatedUsername = validateUsername(e);
    const validatedPassword = validatePassword(e);

    const validateLogin = (username, password) => {
      return true;
    };
    if (validatedUsername && validatedPassword) {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));

      setIsLoggedIn(true);
    }

    setUsername("");
    setPassword("");
    //navigation occurs here
  };

  const validateUsername = (e) => {
    const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    if (username.length < 4) {
      setUsernameError("Username must be atleast 4 characters long");
      return false;
    }
    if (!pattern.test(username)) {
      console.log("test");

      setUsernameError(
        "Username can only contain alphanumeric characters and should not include special characters or spaces."
      );
      return false;
    }
    setUsernameError("");
    return true;
  };
  // const handlePassword = (e) => {};
  const validatePassword = (e) => {
    const value = e.target.value;
    const pattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]{4,}$/;
    if (!pattern.test(password)) {
      setPasswordError(
        "Password must be at least 4 characters long, include at least 1 alphabet, 1 digit and 1 symbol."
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  //   useEffect(() => {
  // const user = JSON.parse(localStorage.getItem('username'))
  // if (user){
  //   console.log(user);
  // }
  //   },[])

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
              <p className={`error-message ${usernameError ? "show" : ""}`}>
                {usernameError}
              </p>
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
              <p className={`error-message ${passwordError ? "show" : ""}`}>
                {passwordError}
              </p>
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
