import React from "react";

// Functional Component
function ResetButton({ reset }) {
    return (
        <div className="">
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ResetButton;