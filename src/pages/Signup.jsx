import { useForm } from "react-hook-form";
import "../styles/Signup.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [togglePasswordVisiblity, setTogglePasswordVisibility] =
    useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignup = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:7777/auth/signup",
        user,
      );
      if (response.status === 201) {
        alert("user saved successfully");
        navigate("/signin");
        reset();
      }
    } catch (err) {
      const errResponse = err.response;
      if (errResponse.status === 409) {
        alert("User already existed");
        console.err("Error while signup ", errResponse);
      }
    }
  };
  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <input
          id="firstName"
          placeholder="Enter First Name..."
          {...register("firstName", { required: "please enter first name" })}
        />
        {errors.firstName && (
          <p className="form-field-level-errors">{errors.firstName.message}</p>
        )}
        <input
          id="lastName"
          placeholder="Enter Last Name..."
          {...register("lastName", { required: "please enter last name" })}
        />
        {errors.lastName && (
          <p className="form-field-level-errors">{errors.lastName.message}</p>
        )}
        <input
          id="email"
          placeholder="Enter email..."
          {...register("email", {
            required: "please enter email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="form-field-level-errors">{errors.email.message}</p>
        )}
        <div className="password-section">
          <input
            placeholder="Enter password..."
            {...register("password", {
              required: "Please enter password",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters with uppercase, lowercase, number, and special character",
              },
            })}
            type={togglePasswordVisiblity ? "text" : "password"}
          />
          <div
            className="password-icons"
            onClick={() =>
              setTogglePasswordVisibility(!togglePasswordVisiblity)
            }
          >
            {togglePasswordVisiblity ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        {errors.password && (
          <p className="form-field-level-errors">{errors.password.message}</p>
        )}
        <div className="gender-section">
          <div className="gender-option">
            <input
              type="radio"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="gender-option">
            <input
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && (
            <p className="form-field-level-errors">{errors.gender.message}</p>
          )}
        </div>
        <input
          type="number"
          placeholder="Enter age..."
          {...register("age", { required: "please enter age" })}
        />
        {errors.age && (
          <p className="form-field-level-errors">{errors.age.message}</p>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up" : "Signup"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
