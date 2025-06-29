import React from 'react';

const sessionsData = [
  {
    id: 1,
    action: "Login to the system",
    ip: "192.168.0.12",
    date: "22.05.2025",
   
  },
  {
    id: 2,
    action: "Password change",
    ip: "192.168.0.10",
    date: "21.05.2025",
   
  },
  {
    id: 3,
    action: "2FA enabled",
    ip: "192.168.0.10",
    date: "20.05.2025",
  
  },
   {
    id: 4,
    action: "Top up BTC",
    ip: "192.168.0.10",
    date: "21.05.2025",
    
  },
];


function AccountDataTab() {
  return (
    <>
   
        <table className="account__table">
          <thead>
            <tr className="account__row">
              <th className="account__cell account__cell--header">Action</th>
              <th className="account__cell account__cell--header">
               Date
              </th>
              <th className="account__cell account__cell--data  account__cell--header">
               IP address
              </th>
             
            </tr>
          </thead>
          <tbody>
            {sessionsData.map(({ id, action, ip, date}) => (
              <tr key={id} className="account__row">
                <td className="account__cell ">{action}</td>
                <td className="account__cell">{date}</td>
                <td className="account__cell account__cell--data">{ip}</td>
              </tr>
            ))}
            {sessionsData.length === 0 && (
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
 
           
</>

  )
}

export default AccountDataTab