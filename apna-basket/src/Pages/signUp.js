import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/AuthReducer/action";
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(addUser());
    try {
      await axios.post("https://big-basket-api.onrender.com/Users", {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      });
      alert("Sign up successful!");
    } catch (err) {
      console.log(err);
      alert("Error signing up. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {isError && <p>Error signing up. Please try again later.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;