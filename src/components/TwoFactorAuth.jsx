import React, { useState, useEffect } from 'react';

const TwoFactorAuth = () => {
  const [sent, setSent] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [code, setCode] = useState('');

  useEffect(() => {
    let timer;
    if (sent && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (sent && seconds === 0) {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [sent, seconds]);

  const handleSend = () => {
    // Тут могла би бути справжня відправка 2FA на email
    setSent(true);
    setSeconds(60);
    setCanResend(false);
    setCode('');
  };

  return (
    <div className="auth">
  {!sent || canResend ? (
    <button
      onClick={handleSend}
      className="auth__button"
    >
      {canResend ? 'Send code again' : 'Send 2FA confirmation to Email'}
    </button>
  ) : (
    <div className="auth__content">
      <div className="auth__timer">Code was sent. Time left: {seconds}s</div>
      <input
        type="text"
        className="auth__input"
        placeholder="Enter 2FA code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  )}
</div>

  );
};

export default TwoFactorAuth;
