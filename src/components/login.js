import React from "react";
import axios from "axios";

class Login extends React.Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <div className="login-container">
                <div className="login">
                    <input />
                    <input />
                    <button></button>
                </div>
            </div>
        )
    }
}

export default Login;