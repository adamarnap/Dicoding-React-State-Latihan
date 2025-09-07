import React from "react";
import { createRoot } from "react-dom/client";
// Import Component
import CounterApp from "./component/CounterApp.jsx";

// Initialize Root
const root = createRoot(document.getElementById("root"));

// Render to root
root.render(<CounterApp />);