// Import the REact and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
console.log(App)
// Show the component on the screen
root.render(<App />);
