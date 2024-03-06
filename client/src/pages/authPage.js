import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";


const AuthPage = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();


  const onLogin = (username, secret, e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  const getCredentialsFromLocalStorage = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username && password) { onLogin(username, password) }
    // return { username, password };
  };
  getCredentialsFromLocalStorage()

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  // const { userData, setUserDataLogin } = useContext(UserContext);
  // console.log(userData)
  // // console.log(userDataLogin, "this is login info")
  // const storedUserData = localStorage.getItem("userDataLogin");
  // const initialUserData = storedUserData ? JSON.parse(storedUserData) : "defaultValue";
  // setUserDataLogin(initialUserData);
  // console.log(initialUserData)





  return (
    <div className="login-page">
      <div className="card">
        {/* Login Form */}
        {/* <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form> */}




        {/* Sign Up Form */}
        {/* <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form> */}
      </div>


    </div>
  );
};

export default AuthPage;
