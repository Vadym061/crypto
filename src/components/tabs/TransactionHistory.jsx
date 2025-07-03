import React, { useState, useRef, useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, callback]);
};

const CustomSelect = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div className={`transaction-history__custom-select ${isOpen ? "is-open" : ""}`} ref={ref}>
      <div
        className="transaction-history__selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className="transaction-history__arrow">
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 1.43066L6.5 7.68066L0.25 1.43066L1.35938 0.321289L6.5 5.46191L11.6406 0.321289L12.75 1.43066Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <ul className="transaction-history__options">
          {options.map((opt) => (
            <li
              key={opt}
              className={`transaction-history__option ${
                opt === selected ? "selected" : ""
              }`}
              onClick={() => {
                onSelect(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const generateTransactions = (count = 50) => {
  const types = ["Input", "Conclusion"];
  const currencies = ["USD", "EUR", "BTC"];
  const statuses = ["Success", "Pending", "Failed"];

  return Array.from({ length: count }).map((_, idx) => ({
    date: `22.05.2025 1${idx % 10}:12`,
    type: types[idx % 2],
    amount: (Math.random() * 500).toFixed(2),
    currency: currencies[idx % currencies.length],
    status: statuses[idx % statuses.length],
  }));
};

const TransactionHistory = () => {
  const typeOptions = ["All of them", "Input", "Conclusion"];
  const directionOptions = ["All", "In", "Out"];
  const linesOptions = ["4", "10", "25"];

  const [type, setType] = useState(typeOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);
  const [linesPerPage, setLinesPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  const data = generateTransactions(67); 

  const totalPages = Math.ceil(data.length / parseInt(linesPerPage));
  const startIdx = (currentPage - 1) * parseInt(linesPerPage);
  const currentData = data.slice(startIdx, startIdx + parseInt(linesPerPage));

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="transaction-history">
     <div className="transaction-history__scroll">
       <div className="transaction-history__filters">
        <div className="transaction-history__wrapper">
          <span>Type of operation</span>
          <CustomSelect
          options={typeOptions}
          selected={type}
          onSelect={setType}
        />
        </div>
        <div className="transaction-history__wrapper">
          <span>Direction</span>
          <CustomSelect
          options={directionOptions}
          selected={direction}
          onSelect={setDirection}
        />
        </div>
      </div>

      <table className="transaction-history__table">
        <thead>
          <tr>
            <th className="transaction-history__header">Date and time
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
            </th>
            <th className="transaction-history__header">Type
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
            </th>
            <th className="transaction-history__header">Amount
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
            </th>
            <th className="transaction-history__header">Currency
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
            </th>
            <th className="transaction-history__header">Status
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, idx) => (
            <tr key={idx}>
              <td className="transaction-history__cell transaction-history__cell--date">{item.date}</td>
              <td className="transaction-history__cell transaction-history__cell--date">{item.type}</td>
              <td className="transaction-history__cell transaction-history__cell--date">{item.amount}</td>
              <td className="transaction-history__cell transaction-history__cell--date">{item.currency}</td>
              <td className="transaction-history__cell transaction-history__cell--date">
                <span
                  className={`transaction-history__status transaction-history__status--${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     </div>
      <div className="transaction-history__pagination">
        <div className="transaction-history__lines">
          <span>Lines per page:</span>
          <CustomSelect
            options={linesOptions}
            selected={linesPerPage}
            onSelect={(val) => {
              setLinesPerPage(val);
              setCurrentPage(1);
            }}
          />
        </div>

     <div className="transaction-history__pages">
  <button
    className="transaction-history__btn transaction-history__btn--prev"
    onClick={() => changePage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    
<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.82823 4.9974L6.2545 1.7474C6.41556 1.59462 6.49609 1.40017 6.49609 1.16406C6.49609 0.927951 6.41556 0.733507 6.2545 0.580729C6.09343 0.427951 5.88844 0.351562 5.63953 0.351562C5.39061 0.351562 5.18562 0.427951 5.02455 0.580729L0.983311 4.41406C0.895458 4.4974 0.833229 4.58767 0.796623 4.6849C0.760017 4.78212 0.741715 4.88628 0.741715 4.9974C0.741715 5.10851 0.760017 5.21267 0.796623 5.3099C0.833229 5.40712 0.895458 5.4974 0.983311 5.58073L5.02455 9.41406C5.18562 9.56684 5.39061 9.64323 5.63953 9.64323C5.88844 9.64323 6.09343 9.56684 6.2545 9.41406C6.41556 9.26128 6.49609 9.06684 6.49609 8.83073C6.49609 8.59462 6.41556 8.40017 6.2545 8.2474L2.82823 4.9974Z" fill="#A9ACAC"/>
</svg>

  </button>

  {currentPage > 2 && (
    <>
      <button
        className="transaction-history__btn transaction-history__btn--first"
        onClick={() => changePage(1)}
      >
        1
      </button>
      {currentPage > 3 && (
        <span className="transaction-history__dots">...</span>
      )}
    </>
  )}

  {currentPage > 1 && (
    <button
      className="transaction-history__btn transaction-history__btn--prev-num"
      onClick={() => changePage(currentPage - 1)}
    >
      {currentPage - 1}
    </button>
  )}

  <button
    className="transaction-history__btn transaction-history__page--active"
    disabled
  >
    {currentPage}
  </button>

  {currentPage < totalPages && (
    <button
      className="transaction-history__btn transaction-history__btn--next-num"
      onClick={() => changePage(currentPage + 1)}
    >
      {currentPage + 1}
    </button>
  )}

  {currentPage < totalPages - 1 && (
    <>
      {currentPage < totalPages - 2 && (
        <span className="transaction-history__dots">...</span>
      )}
      <button
        className="transaction-history__btn transaction-history__btn--last"
        onClick={() => changePage(totalPages)}
      >
        {totalPages}
      </button>
    </>
  )}

  <button
    className="transaction-history__btn transaction-history__btn--next"
    onClick={() => changePage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    
<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.17177 5.0026L0.745502 8.2526C0.584438 8.40538 0.503906 8.59983 0.503906 8.83594C0.503906 9.07205 0.584438 9.26649 0.745502 9.41927C0.906566 9.57205 1.11156 9.64844 1.36047 9.64844C1.60939 9.64844 1.81438 9.57205 1.97545 9.41927L6.01669 5.58594C6.10454 5.5026 6.16677 5.41233 6.20338 5.3151C6.23998 5.21788 6.25829 5.11372 6.25829 5.0026C6.25829 4.89149 6.23998 4.78733 6.20338 4.6901C6.16677 4.59288 6.10454 4.5026 6.01669 4.41927L1.97545 0.585938C1.81438 0.43316 1.60939 0.356771 1.36047 0.356771C1.11156 0.356771 0.906566 0.43316 0.745502 0.585938C0.584438 0.738715 0.503906 0.93316 0.503906 1.16927C0.503906 1.40538 0.584438 1.59983 0.745502 1.7526L4.17177 5.0026Z" fill="#A9ACAC"/>
</svg>

  </button>
</div>

      </div>
    </div>
  );
};

export default TransactionHistory;
