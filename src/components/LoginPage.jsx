import React from "react";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="title"> MOMAID</h1>
        </div>

        <div>
          <label for="username" className="field-title1">
            Username
          </label>
          <br />
          <input
            name="username"
            type="text"
            className="text-field1"
            placeholder=" not more than 8 characters"
          ></input>
        </div>

        <div>
          <label for="password" className="field-title2">
            Password
          </label>
          <br />
          <input
            name="password"
            type="text"
            for=""
            className="text-field2"
            placeholder=" 6-10 characters"
          ></input>
        </div>

        <button className="btn" type="button">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
