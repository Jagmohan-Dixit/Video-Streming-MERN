import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LikeContextProvider } from './context/LikeContext/LikeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikeContextProvider>
      <App />
    </LikeContextProvider>
  </React.StrictMode>
);

