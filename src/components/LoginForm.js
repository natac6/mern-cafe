import { useState } from "react";

const LoginForm = ({ setUser }) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setcredentials({ ...credentials, [name]: value });

    // setcredentials(prevcredentials => {
    //     return (
    //         {
    //             ...prevcredentials,
    //             [name] : value
    //         }
    //     )
    // })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)

    //   setUser(user)
    userService.login(credentials)
    } catch (error) {
      // An error has occurred
      setError("Login Failed - Try Again");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOGIN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default LoginForm;
