import React from "react";
import axios from "axios";

class Profile extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            dateOfBirth: '',
            phoneNumber: '',
            address: '',
            securityQuestionOne: '',
            securityQuestionTwo: '',
            securityQuestionThree: ''
        }
    }
    render(){
        return(
            <div className="profile-container">
                <div className="profile">
                    <input value={this.state.phoneNumber} />
                    <input value={this.state.address} />
                    <input value={this.state.email} />
                    <input value={this.state.dateOfBirth} />
                    <select></select>
                    <select></select>
                    <select></select>
                    <button></button>
                </div>
            </div>
        )
    }
}

export default Profile;