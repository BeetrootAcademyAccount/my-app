import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "./RouterLayout";

function Login() {
  const theme = useContext(ThemeContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const count = useRef(0);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const usernameInputChangeHandler = (event) => {
    setUser((prevValue) => {
      return { ...prevValue, username: event.target.value };
    });
  };

  useEffect(() => {
    count.current = count.current + 1;
    console.log(usernameRef.current);
  });

  const passwordInputChangeHandler = (event) => {
    setUser((prevValue) => {
      return { ...prevValue, password: event.target.value };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };
  function focus(inputField) {
    if (inputField === "username") {
      usernameRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  }

  return (
    <div className={theme}>
      <p></p>
      <button onClick={() => focus("username")}>Focus on Username</button>
      <button onClick={() => focus("pass")}>Focus on Password</button>
      <form onSubmit={formSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            ref={usernameRef}
            type="text"
            name="username"
            onChange={usernameInputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            onChange={passwordInputChangeHandler}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
