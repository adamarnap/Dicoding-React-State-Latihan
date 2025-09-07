import React from "react";

// Function Component
function CounterDisplay({ count }) {
    // ===== FizzBuzz Logic
    // When Count is 0
    if (count === 0) {
        return <h2>{count}</h2>
    }

    // Fizz Buzz If Modulus 5 and 7
    if  (count % 5 === 0 && count % 7 === 0) {
        return (<h2>FizzBuzz</h2>);
    }

    // Fizz If Modulus 5
    if (count % 5 === 0) {
        return (<h2>Fizz</h2>);
    }

    // Buzz If Modulus 7
    if (count % 7 === 0) {
        return (<h2>Buzz</h2>);
    }

    return (<h2>Count: {count}</h2>);
}

export default CounterDisplay;