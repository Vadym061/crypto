import React, { useState } from "react";
import { tabsConfig } from "../../components/TabsConfig";
import CustomButton from "../../components/CustomButton";
import "../../style/account.scss";


function Account() {
  const [activeTab, setActiveTab] = useState(tabsConfig[0].id);
  const ActiveComponent = tabsConfig.find((tab) => tab.id === activeTab)?.component;

  return (
    <section className="account">
      <div className="container account__container">
        <h2 className="heading h2 account__title">Account information</h2>
        <div className="profile-tabs">
          <div className="profile-tabs__nav">
            {tabsConfig.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`profile-tabs__button ${
                  activeTab === id ? "active-account" : ""
                }`}
                onClick={() => setActiveTab(id)}
              >
                 <Icon className="tab-icon" />
                {label}
              </button>
            ))}
          </div>

          <div className="profile-tabs__content">
            {ActiveComponent ? <ActiveComponent /> : <div>Tab not found</div>}
          </div>
          {activeTab === "accountData" && (
            <div className="account__btn-data">
              <CustomButton text="Delete account" className="button-red " />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Account;
