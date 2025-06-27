import React from "react";
import "../style/registration.scss";
import CustomButton from "./CustomButton";

function AccountCreatedModal({ isOpen, onClose, email }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="corner-top-right"></div>
        <div className="corner-bottom-left"></div>
        <button className="modal__close" onClick={onClose}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33268 11.8346L0.166016 10.668L4.83268 6.0013L0.166016 1.33464L1.33268 0.167969L5.99935 4.83464L10.666 0.167969L11.8327 1.33464L7.16602 6.0013L11.8327 10.668L10.666 11.8346L5.99935 7.16797L1.33268 11.8346Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="modal__icon">
          <svg
            width="84"
            height="50"
            viewBox="0 0 84 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.4508 5.89274L58.4035 0.84552L35.691 23.558L40.7383 28.6052L63.4508 5.89274ZM78.5923 0.84552L40.7381 39.0602L25.5965 23.9185L20.5492 28.9657L40.7381 49.1546L84 5.89274L78.5923 0.84552ZM0 28.9657L20.1889 49.1546L25.2361 44.1074L5.04722 23.9185L0 28.9657Z"
              fill="url(#paint0_linear_1_2700)"
            />
            <path
              d="M24.8818 44.1063L20.1885 48.8006L0.353516 28.9656L5.04688 24.2713L24.8818 44.1063ZM83.6396 5.89825L40.7373 48.8006L20.9023 28.9656L25.5957 24.2713L40.7393 39.4149L40.916 39.2361L78.5986 1.19318L83.6396 5.89825ZM63.0967 5.8924L40.7383 28.2518L36.0439 23.5574L58.4033 1.19806L63.0967 5.8924Z"
              stroke="url(#paint1_linear_1_2700)"
              stroke-opacity="0.8"
              stroke-width="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2700"
                x1="42"
                y1="0.84552"
                x2="42"
                y2="49.1546"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#01683C" />
                <stop offset="1" stop-color="#27EC98" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_2700"
                x1="0"
                y1="25.0001"
                x2="84"
                y2="25.0001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="0.501902" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h3 className="modal__title heading h4">Account created</h3>
        <p className="modal__subtitle">We have sent a confirmation email to</p>
        <p className="modal__email">{email}</p>
        <p className="modal__info">
          Check your email and confirm your account to get started. <br /> If
          you haven't received the email, check your Spam folder <br /> or
          resend it.
        </p>

        <CustomButton
          className="modal__button button-2"
          text="Open mail"
          onClick={() => window.open("https://mail.google.com", "_blank")}
        ></CustomButton>
      </div>
    </div>
  );
}

export default AccountCreatedModal;
