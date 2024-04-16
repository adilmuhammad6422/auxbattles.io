import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';


// Check if running in localhost
const isLocalhost = window.location.hostname === 'localhost';
const baseURL = isLocalhost
  ? 'http://localhost:8080' // Replace YOUR_PORT_NUMBER_HERE with the port your backend is running on
  : 'https://backend-service-dot-red-welder-418620.ue.r.appspot.com/';


axios.defaults.baseURL = baseURL;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
