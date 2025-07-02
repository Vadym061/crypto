import React, { useState } from "react";
import { walletConfig } from "../../components/TabsConfig";



function Wallet() {
  const [activeTab, setActiveTab] = useState(walletConfig[0].id);
  const ActiveComponent = walletConfig.find((tab) => tab.id === activeTab)?.component;
  return (
    <section className="account">
      <div className="container account__container">
        <h2 className="heading h2 account__title">Wallet</h2>
   <div className="profile-tabs">
          <div className="profile-tabs__nav wallet__account">
            {walletConfig.map(({ id, label, icon: Icon }) => (
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
         
        </div>
      </div>
    </section>
  )
}

export default Wallet