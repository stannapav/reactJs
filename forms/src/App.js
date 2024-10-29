import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  const [lowerColor, setLowerColor] = useState("#000000");
  const [upperColor, setUpperColor] = useState("#000000");
  const [numberColor, setNumberColor] = useState("#000000");
  const [charactersColor, setCharactersColor] = useState("#000000");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password") {
      if (value.match(/[a-z]/)) setLowerColor("#008000");
      else setLowerColor("#FF0000");

      if (value.match(/[A-Z]/)) setUpperColor("#008000");
      else setUpperColor("#FF0000");

      if (value.match(/[0-9]/)) setNumberColor("#008000");
      else setNumberColor("#FF0000");

      if (value.match(/.{8,}/)) setCharactersColor("#008000");
      else setCharactersColor("#FF0000");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email" //validates email
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <div>
          <h3>Password must contain:</h3>
          <p>
            At least
            <b style={{ color: lowerColor }}> one lowercase letter</b>
          </p>
          <p>
            At least
            <b style={{ color: upperColor }}> one uppercase letter</b>
          </p>
          <p>
            At least
            <b style={{ color: numberColor }}> one number</b>
          </p>
          <p>
            Minimum
            <b style={{ color: charactersColor }}> 8 characters</b>
          </p>
        </div>

        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
