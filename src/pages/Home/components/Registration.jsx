import React, { useState } from "react";
import "../../../style/registration.scss";
import CustomButton from "../../../components/CustomButton";
import AccountCreatedModal from "../../../components/AccountCreateModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
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

  if (!acceptedTerms) {
    newErrors.terms = "You must accept the terms";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  setIsModalOpen(true);
};


  return (
    <main className="main">
      <section className="registration">
        <div className="container registration__container">
          <form className="registration__form" onSubmit={handleSubmit}>
            <div className="corner-top-right"></div>
            <div className="corner-bottom-left"></div>
            <h2 className="registration__title heading h3">Create an account</h2>
            <p className="registration__subtitle">Register to start trading</p>

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
            {errors.password && <p className="registration__error">{errors.password}</p>}

            <label className="registration__checkbox">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.target.checked);
                  if (errors.terms) {
                    setErrors((prev) => ({ ...prev, terms: null }));
                  }
                }}
              />
              <span>I agree to the terms of use and privacy policy</span>
            </label>
            {errors.terms && <p className="registration__error">{errors.terms}</p>}

            <CustomButton
              type="submit"
              text="Register"
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
              Already have an account? <a href="/login">Log in</a>
            </p>

            <AccountCreatedModal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                setEmail("");
                setPassword("");
                setAcceptedTerms(false);
              }}
              email={email}
            />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Registration;
