import React, { Component } from "react";
import {connect} from "react-redux";

import './styles.css';
import {Link} from "react-router-dom";

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Anas',
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

    handleSubmit() {

    };

    render() {
        return (
            <form>
                <div>
                    <input className="Input" type="text" onChange={this.handleChange} placeholder="First Name" required/>
                    <input className="Input" type="text" onChange={this.handleChange} placeholder="Last Name" required/>
                </div>
                <div>
                    <input className="Input" type="email" onChange={this.handleChange} placeholder="Email" required/>
                </div>
                <div>
                    <input className="Input" type="tel" onChange={this.handleChange} placeholder="Phone number" required/>
                </div>
                <div>
                    <input className="Input" type="text" onChange={this.handleChange} placeholder="Username" required/>
                </div>
                <div>
                    <input className="Input" type="password" onChange={this.handleChange} placeholder="Password" required/>
                    <input className="Input" type="password" onChange={this.handleChange} placeholder="Confirm password" required/>
                </div>
                <br/>
                <div className="Submit" onClick={this.handleSubmit}>
                    S'inscrire
                </div>
            </form>
        );
    };
}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps)(Account);