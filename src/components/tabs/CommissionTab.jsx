import React from 'react';
const sessionsData = [
  {
    id: 1,
    type: "Creator",
    size: "0.10%",
    commission: "0.075%",
   
  },
  {
    id: 2,
    type: "Taker",
    size: "0.10%",
    commission: "0.075%",
   
  },
  {
    id: 3,
    type: "ЕЕ",
    size: "0.10%",
    commission: "0.075%",
  
  },

];


function CommissionTab() {
  return (
    <>
   
        <table className="account__table">
          <thead>
            <tr className="account__row">
              <th className="account__cell account__cell--header">Commission type</th>
              <th className="account__cell account__cell--header">
               Size
              </th>
              <th className="account__cell account__cell--comission account__cell--header">
               With FUEX commission (-25%)
              </th>
             
            </tr>
          </thead>
          <tbody>
            {sessionsData.map(({ id, type, size, commission}) => (
              <tr key={id} className="account__row">
                <td className="account__cell ">{type}</td>
                <td className="account__cell">{size}</td>
                <td className="account__cell account__cell--comission">{commission}</td>
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

export default CommissionTab