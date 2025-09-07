import React from "react";

// Functional Component
function FormInput({ onNameChange, onEmailChange, onGenderChange, valueName, valueEmail, valueGender, onSubmit }) {
    return (
        <div className="">
            <h1>Form App</h1>
            <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={valueName} onChange={onNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={valueEmail} onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" value={valueGender} onChange={onGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="button-submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormInput;