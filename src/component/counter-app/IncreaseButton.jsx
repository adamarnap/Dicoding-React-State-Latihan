import React from "react";

// Function Component
function IncreaseButton({ increase }) {
    return (
        <div className="">
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default IncreaseButton;