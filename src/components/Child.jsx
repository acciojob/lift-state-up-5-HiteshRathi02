import React from "react";

function Child({ isLoggedIn, setIsLoggedIn }) {
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter both username and password");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        "You are logged in !"
      ) : (
        <>
          <form onSubmit={handleLogin}>
          <div>
            <label>
              Username: <input type="text" name="username"></input>
            </label>
            </div>
            <div>
            <label>
              Password: <input type="password" name="password"></input>
            </label>
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Child;
