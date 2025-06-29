import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import CustomButton from "../CustomButton";



function AccountTab() {
   const { user } = useContext(AuthContext);

   const getStatusColor = (status) => {
    return status === "active" ? "#049658" : "red";
  };


 if (!user) {
    return <p>Loading...</p>;
  }

  return (
  <>
    <table className="account__table">
      <tbody>
        <tr className="account__row">
          <td className="account__cell account__cell--label">Mail</td>
          <td className="account__cell account__cell--value">{user.email}</td>
          <td className="account__cell account__cell--action">
            <CustomButton text="Change" className="account__button button-1"></CustomButton>
          </td>
        </tr>
        <tr className="account__row">
          <td className="account__cell account__cell--label">Date of registration</td>
          <td className="account__cell account__cell--value">{user.registeredAt}</td>
          <td className="account__cell account__cell--action">
            <CustomButton text="Change" className="account__button button-1"></CustomButton>
          </td>
        </tr>
        <tr className="account__row">
          <td className="account__cell account__cell--label">Account status</td>
          <td className="account__cell account__cell--value">
           
            {user.status === "active" ? "Active" : "Inactive"}
             <span
              className="account__status-dot"
              style={{ backgroundColor: getStatusColor(user.status) }}
            ></span>
          </td>
          <td className="account__cell account__cell--action">
            <CustomButton text='Change' className="account__button button-1"></CustomButton>
          </td>
        </tr>
      </tbody>
    </table>
</>


  )
}

export default AccountTab