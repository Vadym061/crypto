

import React, { useState } from "react";
import Modal from "./Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Для прикладу — правильний старий пароль 
const CORRECT_OLD_PASSWORD = "oldpassword123";

export default function ChangePasswordModal({ isOpen, onClose }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});
  

  const validate = () => {
    const newErrors = {};

    if (!oldPassword) {
      newErrors.oldPassword = "Please enter your old password.";
    } else if (oldPassword !== CORRECT_OLD_PASSWORD) {
      newErrors.oldPassword = "Old password is incorrect.";
    }

    if (!newPassword) {
      newErrors.newPassword = "Please enter a new password.";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters.";
    } else if (!/[0-9!@#$%^&*]/.test(newPassword)) {
      newErrors.newPassword = "Password must include at least one number or symbol.";
    }


    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);


    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Password changed:", { oldPassword, newPassword });
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Change password"
      subtitle="Password must be at least 8 characters and include one number or symbol."
      actions={
        <>
          <button className="button-2 ui-modal__btn" onClick={handleSubmit}>
           Confirm change
          </button>
        </>
      }
    >
      <div className="password-input">
        <input
          type={showOldPassword ? "text" : "password"}
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className={`password-input__field ui-modal__input ${errors.oldPassword ? "password-input__field--error" : ""}`}
        />
        <button
          type="button"
          className="password-input__toggle"
          onClick={() => setShowOldPassword(!showOldPassword)}
          aria-label={showOldPassword ? "Hide old password" : "Show old password"}
        >
          {showOldPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        {errors.oldPassword && (
          <div className="password-input__error">{errors.oldPassword}</div>
        )}
      </div>

      <div className="password-input">
        <input
          type={showNewPassword ? "text" : "password"}
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={`password-input__field ui-modal__input ${errors.newPassword ? "password-input__field--error" : ""}`}
        />
        <button
          type="button"
          className="password-input__toggle"
          onClick={() => setShowNewPassword(!showNewPassword)}
          aria-label={showNewPassword ? "Hide new password" : "Show new password"}
        >
          {showNewPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        {errors.newPassword && (
          <div className="password-input__error">{errors.newPassword}</div>
        )}
      </div>

      <div className="password-input">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`password-input__field ui-modal__input ${errors.confirmPassword ? "password-input__field--error" : ""}`}
        />
        <button
          type="button"
          className="password-input__toggle"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
       {errors.confirmPassword && (
          <div className="password-input__error">{errors.confirmPassword}</div>
        )}
      </div>
       
    </Modal>
  );
}
