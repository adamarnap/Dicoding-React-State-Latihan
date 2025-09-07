import React from "react";

// Functional Component
function DecreaseButton({ decrease }) {
    return (
        <div className="">
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}
export default DecreaseButton;