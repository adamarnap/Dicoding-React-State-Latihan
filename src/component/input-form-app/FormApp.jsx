import React from "react";

// Import Child Component
import FormInput from "./FormInput.jsx";

// Class Component
class FormApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            gender: "Male",
        };

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // Method Event Handler (Name Change)
    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            };
        })
    }

    // Method Event Handler (Email Change)
    onEmailChangeEventHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        })
    }
        
    // Method Event Handler (Gender Change)
    onGenderChangeEventHandler(event) {
        this.setState(() => {
            return {
                gender: event.target.value,
            };
        })
    }

    // Method Event Handler (Submit Form)
    onSubmitEventHandler(event) {
        event.preventDefault(); // Mencegah halaman melakukan reload dari efek default behavior DOM

        const message = `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `;

        // show alert message
        alert(message);        
    }

    render() {
        return (
            <FormInput 
                onNameChange={this.onNameChangeEventHandler}
                onEmailChange={this.onEmailChangeEventHandler}
                onGenderChange={this.onGenderChangeEventHandler}
                onSubmit={this.onSubmitEventHandler}
                valueName={this.state.name}
                valueEmail={this.state.email}
                valueGender={this.state.gender}
            />
        );
    }
}

export default FormApp;