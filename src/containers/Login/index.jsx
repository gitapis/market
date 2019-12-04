import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";

import './styles.css';
import authProvider from "../../providers";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUsernameChange(event) { this.setState({ username: event.target.value, }) };
    handleEmailChange(event) { this.setState({ email: event.target.value, }) };
    handlePasswordChange(event) { this.setState({ password: event.target.value, }) };

    handleSubmit = () => {
        const { email, password} = this.state;
        authProvider.login({email,password});
        this.props.history.push('/market');
    };

    render() {
        return (
            <form>
                <div>
                    <input className="Input" type="email" onChange={this.handleEmailChange} placeholder="Email" required/>
                </div>
                <div>
                    <input className="Input" type="password" onChange={this.handlePasswordChange} placeholder="Password" required/>
                </div>
                <br/>
                <div className="Submit" onClick={this.handleSubmit}>
                    se connecter
                </div>
                <div className="Link">
                    <Link to="/market/subscribe">s'inscrire</Link>
                </div>
                <div className="Link">
                    <Link to="/market/subscribe">mot de passe oublié ?</Link>
                </div>
            </form>
        );
    };
}

export default withRouter(Login);