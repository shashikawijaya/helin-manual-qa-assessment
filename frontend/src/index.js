import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot instead of ReactDOM.render
import './App.css';
import App from './App';

const container = document.getElementById('root'); // Ensure this ID matches the element in index.html
if (container) {
  const root = createRoot(container); // Initialize the root for React 18
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root container 'root' not found in the DOM."); // Debugging: Ensure the target exists
}
