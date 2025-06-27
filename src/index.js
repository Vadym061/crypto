import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom'; 
import Gradient from './components/Gradient.jsx';
import './style/hightlightbox.scss';

const ConditionalGradient = () => {
  const location = useLocation();
  

  const shouldShow = location.pathname === '/';

  return shouldShow ? <Gradient /> : null;
};

const AppWrapper = () => (
  <>
    <ConditionalGradient />
    <App />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

