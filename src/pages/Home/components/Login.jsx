import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import CustomButton from "../../../components/CustomButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../../style/login.scss"; 

const Login = () => {
    const { login } = useContext(AuthContext);
const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = {};

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!email.includes("@") || !email.includes(".")) {
    newErrors.email = "Email must contain @ and a dot";
  } else if (!emailRegex.test(email)) {
    newErrors.email = "Invalid email format";
  }

  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // Фейковий користувач
  const fakeUser = {
    email: email.trim(),
    registeredAt: "22.05.2025",
    status: "active",
  };

  login(fakeUser); 
  navigate("/");
};



  return (
    <main className="main">
      <section className="login ">
        <div className="container login__container">
          <form className="registration__form" onSubmit={handleSubmit}>
            <div className="corner-top-right"></div>
            <div className="corner-bottom-left"></div>
            <h2 className="registration__title heading h3">Log in to your account</h2>
            <p className="registration__subtitle">Trade cryptocurrency without the hassle</p>

            <input
              type="email"
              placeholder="E-mail"
              className={`registration__input ${errors.email ? 'registration__input--error' : ''}`}
              value={email}
              onChange={(e) => {
    const val = e.target.value;
    setEmail(val);

    if (errors.email && emailRegex.test(val)) {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  }}
            />
            {errors.email && <p className="registration__error">{errors.email}</p>}

            <div className="registration__input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                 className={`registration__input ${errors.email ? 'registration__input--error' : ''}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) {
                    setErrors((prev) => ({ ...prev, password: null }));
                  }
                }}
              />
              <button
                type="button"
                className="registration__toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <a href="/login" className="login__forgot">Forgot your password?</a>
            {errors.password && <p className="registration__error">{errors.password}</p>}

            <CustomButton
              type="submit"
              text="Log in"
              className="registration__submit button-2"
            />

            <div className="registration__divider">
              <span>or</span>
            </div>

            <CustomButton
              type="button"
              text="Continue with Google"
              className="registration__google button-1"
            >
              <FcGoogle size={20} />
            </CustomButton>

            <p className="registration__login-link">
             Don't have an account? <a href="/registration">Register</a>
            </p>

            
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
