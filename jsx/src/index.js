// Import the REact and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Get  reference to the div ID root
const el = document.getElementById("root");

// Tell React to take control of tht element
const root = ReactDOM.createRoot(el);

// Create a Component
function App() {
    const name = 'Vincent ';
    const age = 53;

  return (
    <div>
        My name is:
        <h1>{name} 
            {age}
        </h1>
    </div>
  );
}

// Show the component on the screen
root.render(<App />);
