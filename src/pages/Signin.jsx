import { useForm } from "react-hook-form";
import "../styles/Signin.css";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "../store/slices/AuthSlice";

function Signin() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const [togglePasswordVisiblity, setTogglePasswordVisibility] =
    useState(false);
  const handleSignin = async (user) => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:7777/auth/login",
        user,
        {
          withCredentials: true,
        },
      );
      if (loginResponse.status === 200) {
        dispatch(handleLogin(loginResponse.data.userResponse));
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 401) {
        alert(err.response.data.message);
      }
    }
  };
  return (
    <div className="signin-container">
      <h1>Signin</h1>
      <form onSubmit={handleSubmit(handleSignin)}>
        <input
          placeholder="Enter email..."
          {...register("email", {
            required: "Please enter email",
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
        <button type="submit" disabled={isSubmitting}>
          {" "}
          {isSubmitting ? "Submitting..." : "Signin"}
        </button>
      </form>
    </div>
  );
}

export default Signin;
