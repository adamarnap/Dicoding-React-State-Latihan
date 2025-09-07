import React from "react";
import { createRoot } from "react-dom/client";
// Import Component
import CounterApp from "./component/counter-app/CounterApp.jsx";
import FormApp from "./component/input-form-app/FormApp.jsx";

// Initialize Root
const root = createRoot(document.getElementById("root"));

// Render to root
root.render(
    <div className="">
        {/* Counter App */}
        <CounterApp />
        
        {/* Form App */}
        <FormApp />
    </div>
);