import React from "react";

// Import Child Component
import CounterDisplay from "./CounterDisplay.jsx";
import IncreaseButton from "./IncreaseButton.jsx";
import DecreaseButton from "./DecreaseButton.jsx";
import ResetButton from "./ResetButton.jsx";

// Class Component
class CounterApp extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        
        // Initialize count value in state
        this.state = {
            count: 0,
        };
    }


    // Method Event Handler (Increase Count)
    onIncreaseEventHandler() {
        this.setState((prevState) =>{
            return { 
                count: prevState.count + 1 
            };
        })
    }

    // Method Event Handler (Decrease Count)
    onDecreaseEventHandler() {
        this.setState((prevState) => {
            if (prevState.count === 0) {
                return {
                    count: 0
                };
            }
            
            return {
                count: prevState.count - 1
            };
        })
    } 

    // Method Event Handler (Reset Count)
    onResetEventHandler() {
        this.setState(() => {
            return {
                count: 0
            };
        })
    }

    // Render Method
    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <CounterDisplay count={this.state.count} />
                <IncreaseButton increase={this.onIncreaseEventHandler.bind(this)} />
                <DecreaseButton decrease={this.onDecreaseEventHandler.bind(this)} />
                <ResetButton reset={this.onResetEventHandler.bind(this)} />
            </div>
        );
    }

}

export default CounterApp;