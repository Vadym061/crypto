import React, { useState } from "react";
import CustomButton from "../CustomButton";
import Modal from "../Modal";

const sessionsData = [
  {
    id: 1,
    device: "Chrome (macOS)",
    ip: "192.168.0.12",
    lastEntry: "22.05.2025, 12:44",
    location: "Kyiv",
  },
  {
    id: 2,
    device: "Safari (iPhone)",
    ip: "2191.242.0.71",
    lastEntry: "21.05.2025, 20:15",
    location: "Berlin",
  },
  {
    id: 3,
    device: "Chrome (macOS)",
    ip: "89.11.134.21",
    lastEntry: "20.05.2025, 08:01",
    location: "Paris",
  },
];

function SessionsTab() {
  const [sessions, setSessions] = useState(sessionsData);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleRequestLogout = (id) => {
    setSelectedSessionId(id);
    setConfirmModalOpen(true);
  };

  const handleConfirmLogout = () => {
    setSessions((prev) =>
      prev.filter((session) => session.id !== selectedSessionId)
    );
    setConfirmModalOpen(false);
    setSelectedSessionId(null);
  };

  const handleCancelLogout = () => {
    setConfirmModalOpen(false);
    setSelectedSessionId(null);
  };
  return (
    <>
        <table className="account__table">
          <thead>
            <tr className="account__row">
              <th className="account__cell account__cell--header">Device</th>
              <th className="account__cell account__cell--header">
                IP Address
              </th>
              <th className="account__cell account__cell--header">
                Last Entry
              </th>
              <th className="account__cell account__cell--header">Location</th>
              <th className="account__cell account__cell--header">Action</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map(({ id, device, ip, lastEntry, location }) => (
              <tr key={id} className="account__row">
                <td className="account__cell">{device}</td>
                <td className="account__cell">{ip}</td>
                <td className="account__cell">{lastEntry}</td>
                <td className="account__cell">{location}</td>
                <td className="account__cell account__cell--action">
                  <CustomButton
                    text="to complete"
                    className="account__button button-1"
                    onClick={() => handleRequestLogout(id)}
                  />
                </td>
              </tr>
            ))}
            {sessions.length === 0 && (
              <tr>
                <td
                  className="account__cell"
                  colSpan={5}
                  style={{ textAlign: "center" }}
                >
                  No active sessions
                </td>
              </tr>
            )}
          </tbody>
        </table>
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={handleCancelLogout}
        title="End Session"
        subtitle="Are you sure you want to end this session? This device will be disconnected immediately and you will need to log in again."
        actions={
          <>
            <button
              className="button-1 ui-modal__btn"
              onClick={handleCancelLogout}
            >
              Cancel
            </button>
            <button
              className="button-red ui-modal__btn"
              onClick={handleConfirmLogout}
            >
              Confirm
            </button>
          </>
        }
      />
     </>
 
  );
}

export default SessionsTab;
