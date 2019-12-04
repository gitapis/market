import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import './styles.css';
import authProvider from "../../providers";

class Logout extends Component {
    handleSubmit = () => {
        authProvider.logout();
        this.props.history.push('/market');
    };

    render() {
        return (
            <form>
                <div className="Submit" onClick={this.handleSubmit}>
                    se déconnecter
                </div>
            </form>
        );
    };
}

export default withRouter(Logout);