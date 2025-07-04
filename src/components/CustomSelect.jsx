import React, { useState, useRef, useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, callback]);
};

const CustomSelect = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsOpen(false));

  const getSelectedLabel = () => {
    if (typeof selected === 'string') return selected;
    if (typeof selected === 'object' && selected.label) return selected.label;
    return 'Select';
  };

  return (
    <div className={`transaction-history__custom-select ${isOpen ? "is-open" : ""}`} ref={ref}>
      <div
        className={`transaction-history__selected ${
          selected ? 'transaction-history__selected--active' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {getSelectedLabel()}
        <span className="transaction-history__arrow">
          <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              key={opt.value || opt}
              className={`transaction-history__option ${
                (selected?.value || selected) === (opt.value || opt) ? 'selected' : ''
              }`}
              onClick={() => {
                onSelect(opt.value || opt);
                setIsOpen(false);
              }}
            >
              {opt.label || opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default CustomSelect;
