import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isUsernameTouched, setIsUsernameTouched] = useState(false);
  const enteredNameIsValid = username.trim() !== "";

  const isUsernameInvalid = isUsernameTouched && !enteredNameIsValid;

  const usernameInputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const usernameInputBlurHandler = () => {
    setIsUsernameTouched(true);
  };

  const firstNameHandler = () => {
    setFirstName("");
  };

  const lastNameHandler = () => {
    setLastName("");
  };

  const submitForm = (event) => {
    event.preventDefault();

    setIsUsernameTouched(true);

    if (!enteredNameIsValid) {
      console.log("The Form is not valid");
      return;
    }

    console.log("Submit form");
  };

  return (
    <form className="mt-4" onSubmit={submitForm}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          onChange={usernameInputChangeHandler}
          onBlur={usernameInputBlurHandler}
          value={username}
        />
        {isUsernameInvalid && (
          <p style={{ color: "red" }}>Username should not be empty!</p>
        )}
      </div>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" onChange={firstNameHandler} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" onChange={lastNameHandler} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
