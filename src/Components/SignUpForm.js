import React, { useState } from "react";

export default function SignUpForm({ signUp }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting sign up...");
    signUp(user);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}
