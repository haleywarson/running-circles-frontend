import React, { useState } from "react";

export default function LogInForm({ login, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting login...");
    login(username, password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Username</label>
      <input name="username" value={username} onChange={handleUsernameChange} />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      <input type="submit" value="Login" />
    </form>
  );
}
